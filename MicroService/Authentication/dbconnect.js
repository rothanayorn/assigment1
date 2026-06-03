// STEP-1 : IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');
const uri = "mongodb://Registration:dbRegistration@ac-dhf2ivq-shard-00-00.uxs7bzc.mongodb.net:27017,ac-dhf2ivq-shard-00-01.uxs7bzc.mongodb.net:27017,ac-dhf2ivq-shard-00-02.uxs7bzc.mongodb.net:27017/microservice?ssl=true&replicaSet=atlas-aqw9c4-shard-0&authSource=admin&appName=Cluster0";


const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect();
  }
}
run().catch(console.dir);


// STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
module.exports = mongoose;

