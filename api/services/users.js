// Import database access methods
import database from "../database/access.js";

// Import model creation functions
import { newUser } from "../models/user.js";

// Export service functions
export default {
  async deleteUsers() {
    return await database.delete("users", {});
  },
  async createUser(name, email) {
    const user = newUser(name, email);
    await database.create("users", user);
    return user;
  },
};
