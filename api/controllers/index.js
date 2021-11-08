// Import services for business logic
import usersService from "../services/users.js";

// Define controller functions
const controllerFunction = async (req, res, next) => {
  await usersService.deleteUsers();
  const user = await usersService.createUser("Test", "test@gmail.com");
  return res.status(200).json(user);
};

// Export object including all controller functions
export default {
  controllerFunction,
};
