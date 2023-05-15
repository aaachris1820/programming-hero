const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const services=require('./services.json');

app.use(cors());
app.use(express.json());

const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})


const verifyJwt=(req,res,next)=>{
  const authorization=req.headers.authorization;
  
  if(!authorization){
    return res.status(401).send({message:'not authorized'})
  }

  const payload=authorization.split(' ')[1];

  const token=payload;
  
  try{
    const decoded=jwt.verify(token,process.env.SECRET);
 
    next();
  }
  catch(err){
    return res.status(403).send({message:'not authorized'});
  }


}

app.get('/token',(req,res)=>{
  const payload=req.body.email;
  const token=jwt.sign({payload},process.env.SECRET,{expiresIn:"10h"});
  res.send({token});
})
app.get('/services',verifyJwt,(req,res)=>{
  res.json(services);
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

    //await client.connect();
    const collection=client.db('CRUD-users').collection('car-doctor');

    app.get('/',(req,res)=>{
        res.send({hello: "sdfa"})
    })
const datas=[{a:1}];
    app.post('/post',(req,res)=>{
      const data=req.body;
      datas.push(data);
      res.json(datas);
    })

    app.get('/data',async(req,res)=>{
      const data=await collection.find({}).toArray();
      res.send(data);
    })

  } finally {

    //await client.close();
  }
}
run().catch(console.dir);



module.exports=app;