const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/',(req,res)=>{
  res.send('server of coffees')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@crud-practice.heeny6h.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const collection = client.db("CRUD-users").collection("coffees");

        app.get('/coffees', async (req, res) => {
            const result =await collection.find({}).toArray();
            res.send(result);
        });

        app.post('/coffees',async(req,res)=>{
            const data=req.body;
            const result=await collection.insertOne(data);
            res.send(JSON.stringify(result));
        });

        app.delete('/coffees',async(req,res)=>{
            const id=req.body;
            const sendId=new ObjectId(id._id);
            const result=await collection.deleteOne({"_id":sendId});
            if(result.deletedCount==1)
                res.send(result);
            else 
                res.send(JSON.stringify('failed'));
        })

        app.get('/coffee/:id',async(req,res)=>{
            const id=req.params.id;
            
            const result =await collection.find({'_id': new ObjectId(id)}).toArray();
            
            res.send(result);
        })

        app.put('/coffee/:id',async(req,res)=>{
            const id=req.params.id;
            const sendId=new ObjectId(id);
            const coffee=req.body;

            const options={upsert:true};
            const updateDoc={
                $set:coffee
            };

            const result= await collection.updateOne({'_id':sendId},updateDoc,options);

            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);

module.exports=app;