import { MongoClient } from 'mongodb';

class Database {
  client = null;
  db = null;

  constructor() {}

  setup = async (config) => {
    this.client = new MongoClient(config.url, {
      appName: config.appName,
      minPoolSize: config.minPoolSize,
      maxPoolSize: config.maxPoolSize,
    });

    await this.client.connect();
    this.db = this.client.db(config.database);
  };
}

export const database = new Database();
