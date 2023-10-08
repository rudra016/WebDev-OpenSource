const userModel = require("../models/userModel");

//DONOR LIST
const getDonorsListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "donor" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: donorData.length,
      message: "Donor List Fetched Successfully!",
      donorData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor List API!",
      error,
    });
  }
};
//HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: hospitalData.length,
      message: "Hospital List Fetched Successfully!",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital List API!",
      error,
    });
  }
};

//ORGANISATION LIST
const getOrganisationListController = async (req, res) => {
  try {
    const organisationList = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: organisationList.length,
      message: "Organisation List Fetched Successfully!",
      organisationList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Organisation List API!",
      error,
    });
  }
};

//******** DELETE DONOR *********/
const deleteDonorController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Donor Record Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Donor API!",
      error,
    });
  }
};

//******** DELETE ORGANISATION *********/
const deleteOrganisationController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Organisation Record Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Organisation API!",
      error,
    });
  }
};

//******** DELETE HOSPITAL *********/
const deleteHospitalController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Hospital Record Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Delete Hospital API!",
      error,
    });
  }
};

//Export
module.exports = {
  getDonorsListController,
  getHospitalListController,
  getOrganisationListController,
  deleteDonorController,
  deleteOrganisationController,
  deleteHospitalController,
};
