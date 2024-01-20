import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middlewares/authMiddleware.js";  // Fix the import path

// Router object
const router = express.Router();

// Routes
router.post("/test-post", userAuth, testPostController);

// Export
export default router;
