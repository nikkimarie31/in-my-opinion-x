import { MongoClient, ReadPreference } from 'mongodb';

class MongoDB {
  private static instance: MongoDB;
  private client: MongoClient;

  private constructor() {
    const uri = process.env.MONGODB_URI || 'default_mongodb_uri_if_not_provided';
    console.log('MongoDB Connection String:', uri);
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      readPreference: ReadPreference.SECONDARY_PREFERRED,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      ssl: true,
      retryWrites: true,
    };

    this.client = new MongoClient(uri, options);
  }

  static getInstance(): MongoDB {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
    }
    return MongoDB.instance;
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      throw new Error('Failed to connect to MongoDB');
    }
  }

  close(): void {
    this.client.close();
    console.log('MongoDB connection closed');
  }

  getClient(): MongoClient {
    return this.client;
  }
}

export default MongoDB;
