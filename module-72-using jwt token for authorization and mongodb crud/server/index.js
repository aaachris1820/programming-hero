const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log('listening to ',PORT));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@crud-practice.heeny6h.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    const collection=client.db('CRUD-users').collection('car-doctor');

    app.get('/',(req,res)=>{
        res.send({hello: "sdfa"})
    })

  } finally {

    //await client.close();
  }
}
run().catch(console.dir);



module.exports=app;