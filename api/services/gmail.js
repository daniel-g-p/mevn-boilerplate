// Import package dependencies
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Import environment variables
import config from "../config/index.js";

// Create OAuth2 client
const auth = new google.auth.OAuth2(
  config.emailClientId,
  config.emailClientSecret,
  config.emailRedirectUri
);

// Set credentials on OAuth2 client
auth.setCredentials({ refresh_token: config.emailRefreshToken });

// Define email transport creator function
const createTransporter = async () => {
  const accessToken = await oAuth2Client.getAccessToken();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: config.emailAddress,
      clientId: config.emailClientId,
      clientSecret: config.emailClientSecret,
      refreshToken: config.emailRefreshToken,
      accessToken: accessToken,
    },
  });
};

// Export function to send emails
export const sendEmail = async (name, address, subject, text) => {
  const transporter = await createTransporter();
  const options = {
    from: { name: config.apiName, address: config.emailAddress },
    to: { name, address },
    subject,
    text,
  };
  return await transporter.sendMail(options);
};
