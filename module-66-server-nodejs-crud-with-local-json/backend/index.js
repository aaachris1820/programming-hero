const express = require('express');
const users = require('./user.json');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json())
app.use(cors());

app.listen(PORT, () => {
    console.log('listening on port 3000')
})

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(target => target.id === id);
    res.send(user);
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.status(200).send(users);
});


const { MongoClient, ServerApiVersion } = require('mongodb');
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

        const collection = client.db("CRUD-users").collection("crud-users");

        app.get('/users', async (req, res) => {
            const result =await collection.find().toArray();
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);



module.exports = app;