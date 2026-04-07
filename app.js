const { MongoClient } = require('mongodb');

const url = `mongodb://${process.env.DB_HOST || 'mongo'}:${process.env.DB_PORT || 27017}`;
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    const db = client.db('tasksdb');
    const collection = db.collection('tasks');
    
    const tasks = await collection.find({}).toArray();
    console.log(tasks);
  } catch (err) {
    console.error(err);
  }
}

main();
