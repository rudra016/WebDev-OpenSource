const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

//ROUTER OBJECT
const router = express.Router();

//**** CREATE ROUTES ****/
//Register || POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

//Get Current User || GET
router.get("/current-user", authMiddleware, currentUserController);

//**** EXPORT ****/
module.exports = router;
