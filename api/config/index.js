// Import and configure Dotenv package
import dotenv from "dotenv";
dotenv.config();

// Export environment variables
export default {
  env: process.env.NODE_ENV || "production",
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
  dbName: process.env.DB_NAME || "test",
  cookieSecret: process.env.COOKIE_SECRET || "secret",
  jwtSecret: process.env.JWT_SECRET || "secret",
};
