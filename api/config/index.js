// Import and configure Dotenv package
import dotenv from "dotenv";
dotenv.config();

// Export environment variables
export default {
  nodeEnv: process.env.NODE_ENV || "production",
  apiName: process.env.apiName || "apiName",
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
  dbName: process.env.DB_NAME || "test",
  cookieSecret: process.env.COOKIE_SECRET || "secret",
  jwtSecret: process.env.JWT_SECRET || "secret",
  emailAddress: process.env.EMAIL_ADDRESS || "test@test.com",
  emailClientId: process.env.EMAIL_CLIENT_ID || "clientId",
  emailClientSecret: process.env.EMAIL_CLIENT_SECRET || "clientSecret",
  emailRefreshToken: process.env.EMAIL_REFRESH_TOKEN || "refreshToken",
  emailAccessToken: process.env.EMAIL_ACCESS_TOKEN || "accessToken",
  emailRedirectUri: process.env.EMAIL_REDIRECT_URI || "redirectUri",
};
