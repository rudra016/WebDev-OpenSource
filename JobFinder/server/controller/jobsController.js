import mongoose from "mongoose";
import jobsModel from "../models/jobsModel.js";
import moment from "moment";

// ******* CREATE JOBS **********
export const createJobController = async (request, response, next) => {
  const { company, position } = request.body;

  //   VALIDATION
  if (!company || !position) {
    next("Please Provide All Fields!");
  }
  request.body.createdBy = request.user.userId;

  const job = await jobsModel.create(request.body);

  response.status(201).json({ job });
};

// ******* GET JOBS **********
export const getAllJobsController = async (request, response, next) => {

  const {status, workType, search, sort} = request.query;

  // Condition for searching filters
  const queryObject = {
    createdBy : request.user.userId
  }
  // Filter Logic (status)
  if(status && status !== 'all'){
    queryObject.status = status;
  }
   // Filter Logic (workType)
   if(workType && workType !== 'all'){
      queryObject.workType = workType;
   }
   // Filter Logic (workType)
   if(search){
    queryObject.position = {
      $regex: search,
      $options : 'i'
    };
   }
  let queryResult = jobsModel.find(queryObject);

  // SORTING
  if(sort === 'latest'){
    queryResult = queryResult.sort('-createdAt'); // "-" add for latest.
  }
  if(sort === 'oldest'){
    queryResult = queryResult.sort('createdAt');
  }
  if(sort === 'a-z'){
    queryResult = queryResult.sort("position");
  }
  if(sort === 'z-a'){
    queryResult = queryResult.sort("-position");
  }

  // ***** Pagination ****
  const page = Number(request.query.page) || 1;
  const limit = Number(request.query.limit) || 10;
  const skip = (page - 1) * limit;
  queryResult = queryResult.skip(skip).limit(limit);
  //Jobs count
  const totalJobs = await jobsModel.countDocuments(queryResult);
  const numOfPage = Math.ceil(totalJobs/limit);

  const jobs = await queryResult;

  // const jobs = await jobsModel.find({ createdBy: request.user.userId });
  response.status(200).json({
    totalJobs,
    jobs,
    numOfPage,
  });
};


// *******  UPDATE JOBS  *******
export const updateJobController = async (request, response, next) => {
  const { id } = request.params;
  const { company, position } = request.body;

  // VALIDATION
  if (!company || !position) {
    next("Please Provide All Fields!");
  }
  //find job
  const job = await jobsModel.findOne({ _id: id });

  if (!job) {
    next(`No Job Found With This Id : ${id}`);
  }
  if (!request.user.userId === job.createdBy.toString()) {
    next("You are not Authoried to Update this Job!");
    return;
  }

  const updateJob = await jobsModel.findOneAndUpdate(
    { _id: id },
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );
  // Response Send
  response.status(200).json({ updateJob });
};

// ******* DELETE JOB *******
export const deleteJobController = async (request, response, next) => {
  const { id } = request.params;

  //find job
  const job = await jobsModel.findOne({ _id: id });

  // Validation
  if (!job) {
    next(`No Job Found With This Id:${id}`);
  }
  //check login user
  if (!request.user.userId === job.createdBy.toString()) {
    next("You are not Authoried to Update this Job!");
    return;
  }

  //Delete
  await job.deleteOne();

  // Response Send
  response.status(200).json({ message: "Job Deleted Successfully!" });
};


// ******* JOB STATS & FILTER *******
export const jobStatsController = async (request, response) => {
  const stats = await jobsModel.aggregate([
    //Search by user job
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(request.user.userId),
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  // Default Stats
  const defaultStats = {
    pending: stats.pending || 0,
    reject: stats.reject || 0,
    interview: stats.interview || 0,
  };

  // Monthly & Yearly Stats show
  let monthlyApplication = await jobsModel.aggregate([
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(request.user.userId),
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  monthlyApplication = monthlyApplication
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  // Response Send
  response.status(200).json({
    totalJob: stats.length,
    defaultStats,
    monthlyApplication,
  });
};
