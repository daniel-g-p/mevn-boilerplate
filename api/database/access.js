// Import ObjectId class from MongoDB package
import { ObjectId } from "mongodb";

// Import database access function
import { accessDatabase } from "./connect.js";

// Define helper function to specify the database collection
const setDb = (collection) => {
  return accessDatabase().collection(collection);
};

// Define helper function to specify the database query by ID
const setIdQuery = (id) => {
  return { _id: new ObjectId(id) };
};

// Define helper function to specify projection and sort options
const setOptions = (projectionFields, sortOptions) => {
  const options = { projection: {}, sort: sortOptions };
  for (let field of projectionFields) {
    options.projection[field] = 1;
  }
  return options;
};

// Export methods to make calls to the database
export default {
  async create(collection, data) {
    const db = setDb(collection);
    const isArray = Array.isArray(data);
    return isArray ? await db.insertMany(data) : await db.insertOne(data);
  },
  async findById(collection, id, projectionFields = [], sortOptions = {}) {
    const db = setDb(collection);
    const query = setIdQuery(id);
    const options = setOptions(projectionFields, sortOptions);
    return await db.findOne(query, options);
  },
  async find(collection, query, projectionFields = [], sortOptions = {}) {
    const db = setDb(collection);
    const options = setOptions(projectionFields, sortOptions);
    return await db.find(query, options).toArray();
  },
  async updateById(collection, id, updateDocument) {
    const db = setDb(collection);
    const filter = setIdQuery(id);
    const update = { $set: updateDocument };
    return await db.updateOne(filter, update);
  },
  async update(collection, filter, updateDocument) {
    const db = setDb(collection);
    const update = { $set: updateDocument };
    return await db.updateMany(filter, update);
  },
  async deleteById(collection, id) {
    const db = setDb(collection);
    const filter = setIdQuery(id);
    return await db.deleteOne(filter);
  },
  async delete(collection, filter) {
    const db = setDb(collection);
    return await db.deleteMany(filter);
  },
};
