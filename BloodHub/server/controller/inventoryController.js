const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//********* CREATE INVENTORY *******/
const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    //Validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not Found!");
    }
    //Check inventoryType
    // if (inventoryType === "in" && user.role !== "donor") {
    //   throw new Error("Not a Donor Account!");
    // }
    // if (inventoryType === "out" && user.role !== "hospital") {
    //   throw new Error("Not a Hospital!");
    // }

    //
    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      //Calculate Blood Quantity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log("Total in: ", totalInOfRequestedBlood);
      const totalIn = totalInOfRequestedBlood[0]?.total || 0;

      //Calculate OUT Blood Quantity
      const totalOutOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } },
        },
      ]);
      // console.log("Total out: ", totalOutOfRequestedBlood);
      const totalOut = totalOutOfRequestedBlood[0]?.total || 0;

      //Calculate of in & out
      const availableQuantityOfBolldGroup = totalIn - totalOut;

      //Quantity Validation
      if (availableQuantityOfBolldGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuantityOfBolldGroup}ml of ${requestedBloodGroup.toUpperCase()} is available!`,
        });
      }
      req.body.hospital = user?._id;
    } else {
      req.body.donor = user?._id;
    }

    //Save inventory(blood record)
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    //Response
    return res.status(201).send({
      success: true,
      message: "New Blood Record Added!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API!",
      err,
    });
  }
};

//******* GET INVENTORY RECORDS(BLOOD RECORD) *******/
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organization: req.body._id,
      })
      .populate("donor")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Get all Records Successfully",
      inventory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Get All Inventory",
      err,
    });
  }
};

//******** GET DONOR RECORD *******/
const getDonorsController = async (req, res) => {
  try {
    const organisation = req.body.userId;

    //find donor
    const donorId = await inventoryModel.distinct("donor", {
      organisation,
    });
    // console.log(donorId);
    const donors = await userModel.find({ _id: { $in: donorId } });

    res.status(200).send({
      success: true,
      message: "Donor Record Fetched Successfully!",
      donors,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor Records",
      error,
    });
  }
};

//****** GET HOSPITALS DATA **********/
const getHospitalsController = async (req, res) => {
  try {
    const organisation = req.body.userId;
    //get hospital id
    const hospitalId = await inventoryModel.distinct("hospital", {
      organisation,
    });

    //find hospital
    const hospitals = await userModel.find({ _id: { $in: hospitalId } });

    return res.status(200).send({
      success: true,
      message: "Hospital Data Fetched Successfully!",
      hospitals,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital Records",
      error,
    });
  }
};

//********* GET ORGANISATION DATA ***********/
const getOrganisationController = async (req, res) => {
  try {
    const donor = req.body.userId;
    const orgId = await inventoryModel.distinct("organisation", {
      donor,
    });
    //Find Org
    const organisations = await userModel.find({ _id: { $in: orgId } });

    return res.status(200).send({
      success: true,
      message: "Organisation Data Fetched Successfully!",
      organisations,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Organisation API!",
      error,
    });
  }
};

//******** GET ORGANISATION DATA IN HOSPITAL PAGE **********/
const getOrganisationForHospitalController = async (req, res) => {
  try {
    const hospital = req.body.userId;
    const orgId = await inventoryModel.distinct("organisation", {
      hospital,
    });
    // find organisation
    const organisations = await userModel.find({ _id: { $in: orgId } });

    return res.status(200).send({
      success: true,
      message: "Organisation (Hospital) Data Fetched Successfully!",
      organisations,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Organisation (Hospital) API!",
      error,
    });
  }
};

//******* GET HOSPITAL BLOOD RECORDS *******/
const getInventoryHospitalController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find(req.body.filters)
      .populate("donor")
      .populate("hospital")
      .populate("organisation")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Get Hospital Consumer Records Successfully",
      inventory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Get Consumer Blood Records",
      err,
    });
  }
};

//******* GET BLOOD RECORDS OF 3 *******/
const getRecentInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .limit(3)
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Recent Inventory Data!",
      inventory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error In Recent Inventrory API!",
      err,
    });
  }
};

//****** EXPORT *****/
module.exports = {
  createInventoryController,
  getInventoryController,
  getDonorsController,
  getHospitalsController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
};
