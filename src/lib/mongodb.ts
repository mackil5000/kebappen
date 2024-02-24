import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// In production mode, it's best to not use a global variable.
let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;
