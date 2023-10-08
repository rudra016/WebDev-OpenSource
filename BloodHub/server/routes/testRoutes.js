const express = require("express");
const { testController } = require("../controller/testController.js");

//ROUTER OBJECT
const router = express.Router();

//Routes Create
router.get("/", testController);

//Export
module.exports = router;
