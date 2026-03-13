const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controller/analyticsController");

//Router Object
const router = express.Router();

//**** CREATE ROUTES ****/
//Get Blood Data
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;
