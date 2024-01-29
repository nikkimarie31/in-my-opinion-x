// lib/mongodbService.ts

import { MongoClient, ReadPreference } from 'mongodb';

const dbName = 'blog';

class MongoDBService {
  private client: MongoClient;

  constructor(client: MongoClient) {
    this.client = client;
  }

  private getCollection(collectionName: string) {
    return this.client.db(dbName).collection(collectionName);
  }

  async fetchBlogPosts(page: number, limit: number, category?: string) {
    try {
      const query: any = {};
      if (category) {
        query.category = category;
      }

      const skip = (page - 1) * limit;

      return await this.getCollection('blogPosts')
        .find(query)
        .skip(skip)
        .limit(limit)
        .toArray();
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw new Error('Failed to fetch blog posts');
    }
  }
}

export default MongoDBService;
