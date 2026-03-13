import express from "express";
import { testPostController } from "../controller/testController.js";
import userAuth from "../middleware/authMiddleware.js";

//router object create
const router = express.Router();

// routes create
router.post("/test-post", userAuth, testPostController);

//exports
export default router;
