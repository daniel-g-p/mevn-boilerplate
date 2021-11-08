// Import MongoClient class
import { MongoClient } from "mongodb";

// Import environment variables
import config from "../config/index.js";

// Define database variable
let database;

// Export database connector function
export const connectToDatabase = async () => {
  const options = { useUnifiedTopology: true, useNewUrlParser: true };
  const client = new MongoClient(config.dbUrl, options);
  await client.connect();
  database = client.db(config.dbName);
};

// Export database access function
export const accessDatabase = () => database;
