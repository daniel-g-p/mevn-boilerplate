// Import package dependencies
import express from "express";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import environment variables
import config from "./config/index.js";

// Import database connector function
import { connectToDatabase } from "./database/connect.js";

// Import error handling middleware
import { errorHandler } from "./middleware/errors.js";

// Import application routers
import router from "./routes/index.js";

// Initiate Express application
const app = express();

// Set up global middleware functions
app.use(compression())
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser(config.cookieSecret));

// Set up application routers
app.use("/", router);

// Use error handler on all API calls
app.use(errorHandler);

// Define server starter function
const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(config.port, () => {
      if (config.nodeEnv === "development") {
        console.log(`Server running on http://localhost:${config.port}`);
      }
    });
  } catch (error) {
    if (config.nodeEnv === "development") {
      console.log(error);
    }
    process.exit();
  }
};

// Start server
startServer();
