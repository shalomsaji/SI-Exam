const {MongoClient} = require('mongodb')
const state={
    db:null
}


//url for Atlas Cluster
//const url='mongodb+srv://studentsindiadigital:DIGIstudents2023@cluster0.mta47ex.mongodb.net/?retryWrites=true&w=majority'
const url='mongodb://127.0.0.1:27017'
const dbname='examServer'

const client = new MongoClient(url)

const connect = async(cb)=>{
    try{
        await client.connect();
        const db = client.db(dbname);
        state.db = db
        console.log('Connection Successful')
        return cb();
    }catch (err) {
        return cb(err)
    }
}

const get = ()=>state.db;
module.exports={connect,get}
 

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://studentsindiadigital:DIGIstudents2023@cluster0.mta47ex.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//module.exports={connect,get}