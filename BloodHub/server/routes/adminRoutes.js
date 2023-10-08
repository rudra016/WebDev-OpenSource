const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getDonorsListController, getHospitalListController, getOrganisationListController, deleteDonorController, deleteOrganisationController, deleteHospitalController } = require("../controller/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

//Router Object
const router = express.Router();

//Routes
//GET DONOR LIST
router.get("/donor-list", authMiddleware, adminMiddleware, getDonorsListController);

//GET HOSPITAL LIST
router.get("/hospital-list", authMiddleware, adminMiddleware, getHospitalListController);

//GET ORGANISATION DATA
router.get("/organisation-list", authMiddleware, adminMiddleware, getOrganisationListController);

//DELETE DONOR DATA
router.delete("/delete-donor/:id", authMiddleware, adminMiddleware, deleteDonorController);

//DELETE ORGANISATION DATA
router.delete("/delete-organisation/:id", authMiddleware, adminMiddleware, deleteOrganisationController);

//DELETE HOSPITAL DATA
router.delete("/delete-hospital/:id", authMiddleware, adminMiddleware, deleteHospitalController);

//Export
module.exports = router;
