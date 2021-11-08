// Import cryptography algorithm from Argon2 package
import argon2 from "argon2";

// Set cryptography options
const options = { hashLength: 40, timeCost: 4, memoryCost: 5120 };

// Export hashing function
export const hash = async (string) => {
  return await argon2.hash(string, options);
};

// Export hash verification function
export const verifyHash = async (hash, string) => {
  return await argon2.verify(hash, string, options);
};
