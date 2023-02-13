import { MongoClient, Collection, Db } from 'mongodb';

const dbClient: MongoClient = new MongoClient(`${process.env.DB_CONN_STRING}`);

export class Database {
  public collections: { [key: string]: Collection } = {};

  public async connect() {
    console.log('Connecting to database...');
    await dbClient.connect();

    const db: Db = dbClient.db(`${process.env.DB_NAME}`);

    const tournamentsCollection: Collection = db.collection(`${process.env.TOURNAMENTS_COLLECTION_NAME}`);

    this.collections.tournaments = tournamentsCollection;
    console.log(
      `Successfully connected to database: ${db.databaseName} and collection: ${tournamentsCollection.collectionName}`
    );
  }
}