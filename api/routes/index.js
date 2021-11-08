// Import Router function from Express package
import { Router } from "express";

// Import function wrapper for controllers
import { tryCatch } from "../middleware/errors.js";

// Import route controller
import controller from "../controllers/index.js";

// Create router object
const router = Router();

// Set controller functions for all routes
router.get("/", tryCatch(controller.controllerFunction));

// Export router object
export default router;
