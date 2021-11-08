// Import environment variables
import config from "../config/index.js";

// Export function wrapper for controllers
export const tryCatch = (controllerFunction) => {
  return async (req, res, next) => {
    try {
      return controllerFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// Export global error handling function
export const errorHandler = (error, req, res, next) => {
  if (config.env === "development") {
    console.log(error);
  }
  return res.status(500).send("Error");
};
