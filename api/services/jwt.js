// Import Json Web Token package
import jwt from "jsonwebtoken";

// Import environment variables
import config from "../config/index.js";

// Export token signing function
export const signJwtToken = (string) => {
  const options = { expiresIn: 60 * 60 };
  return jwt.sign(string, config.jwtSecret, options);
};

// Export token verification function
export const verifyJwtToken = (jwtToken) => {
  return jwt.verify(jwtToken, config.jwtSecret, (error, data) => {
    return error ? false : data;
  });
};
