import http from "http";
import { MongoClient } from "mongodb";

const DATABASE_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const DATABASE_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const DATABASE_DB = process.env.MONGO_INITDB_DATABASE;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_COLLECTION = process.env.DATABASE_COLLECTION;

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

const URI = `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}`;
const client = new MongoClient(URI);

const db = client.db(DATABASE_DB);
const collection = db.collection(DATABASE_COLLECTION);

console.log("===");

async function main() {
  try {
    await client.connect();
    console.log("Connected to Mongo! :D");
    const server = http.createServer();

    server.on("request", async (req, res) => {
      const result = await collection.findOne();
      res.end(JSON.stringify(result));
    });
    server.listen(SERVER_PORT, SERVER_HOST);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

main()
  .then(() => console.log("Server started!"))
  .catch((error) => console.log("Something went wrong", error));
