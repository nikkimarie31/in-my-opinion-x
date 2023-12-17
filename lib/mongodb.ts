import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient = new MongoClient(uri, options);
let clientPromise: Promise<MongoClient> = client.connect();

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = clientPromise;
  } else {
    clientPromise = global._mongoClientPromise;
  }
}

export default clientPromise;
