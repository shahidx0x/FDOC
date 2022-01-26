const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 4000;
const app = express();
require("dotenv").config();

//MIDDLEWARE SETUP

app.use(cors());
app.use(express.json());

// SERVER STATUS

app.get("/", (req, res) => {
  res.status(200).send("Server Running [OK]");
});

//LISTENING PORT

app.listen(port, () => {
  console.log("[*] Listening to port ", port);
});

//MONGODB CONNECTION AND CONFIGUREING API

const uri = `mongodb+srv://practice:ISlz3WEfWEIrIGjT@cluster0.wzlrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION DEBUGING

client.connect((err) => {
  if (err === undefined) {
    console.log("[*] Database Connected Successfully.");
  } else {
    console.error("[*] Database Connection Failed.");
  }

  // SETING UP API

  async function run() {
    try {
      await client.connect();
      const database = client.db("project-101-doctor");
      const haiku2 = database.collection("users");
      const haiku3 = database.collection("doctordata");
      const haiku4 = database.collection("prinfo");
      const haiku5 = database.collection("users");
const haiku6 = database.collection("pres-img");

      //GET API FOR USERS
      app.get("/users", async (req, res) => {
        const cursor = haiku5.find({});
        const users = await cursor.toArray();
        res.send(users);
      });
      //GET API PRESS-IMG
      app.get("/pres-img", async (req, res) => {
        const cursor = haiku6.find({});
        const users = await cursor.toArray();
        res.send(users);
      });
      //GET API FOR PRINFO
      app.get("/users-info", async (req, res) => {
        const cursor = haiku4.find({});
        const users = await cursor.toArray();
        res.send(users);
      });
      //GET API FOR DOCTOR-INFO
      app.get("/doctorlist", async (req, res) => {
        const cursor = haiku3.find({});
        const users = await cursor.toArray();
        res.send(users);
      });

      //GET SINGLE DOCTOR
      app.get("/doctorlist/:id", async (req, res) => {
        const id = req.params.id;
        console.log("[*] Getting single service id", id);
        const query = { _id: ObjectId(id) };
        const service = await haiku3.findOne(query);
        res.json(service);
      });

     //GET SINGLE USER-INFO
      app.get("/users-info/:id", async (req, res) => {
        const id = req.params.id;
        console.log("[*] Getting single service id", id);
        const query = { _id: ObjectId(id) };
        const service = await haiku4.findOne(query);
        res.json(service);
      });

      //GET API FOR ADMIN ,DOCTOR CHECK

      app.get("/users/:email", async (req, res) => {
        const email = req.params.email;
        const query = { email: email };
        const user = await haiku2.findOne(query);
        let isAdmin = false;
        let isDoctor = false;
        if (user?.role === "admin") {
          isAdmin = true;
        } else if (user?.role === "doctor") {
          isDoctor = true;
        }
        res.json({ admin: isAdmin, doctor: isDoctor });
      });

      //POST API FOR USERS
      app.post("/users", async (req, res) => {
        const users = req.body;
        const result = await haiku2.insertOne(users);
        res.json(result);
        console.log("[*] User uploaded to database");
      });

      //POST API FOR USERS
      app.post("/pres-img", async (req, res) => {
        const users = req.body;
        const result = await haiku6.insertOne(users);
        res.json(result);
        console.log("[*] User uploaded to database");
      });

      //POST API FOR USERS
      app.post("/users-info", async (req, res) => {
        const users = req.body;
        const result = await haiku4.insertOne(users);
        res.json(result);
        console.log("[*] User uploaded to database");
      });

      //POST API FOR DOCTOR-LIST
      app.post("/doctorlist", async (req, res) => {
        const users = req.body;
        const result = await haiku3.insertOne(users);
        res.json(result);
        console.log("[*] User uploaded to database");
      });

      //PUT API FOR USERS

      app.put("/users", async (req, res) => {
        const user = req.body;
        const filter = { email: user.email };
        const option = { upsert: true };
        const update = { $set: user };
        const result = await haiku2.updateOne(filter, update, option);
      });
            //PUT API FOR PRINFO

      app.put("/users-info", async (req, res) => {
        const user = req.body;
        const filter = { email: user.email };
        const option = { upsert: true };
        const update = { $set: user };
        const result = await haiku4.updateOne(filter, update, option);
      });
      app.put("/users-info/:id", async (req, res) => {
        const user = req.body;
        const filter = { email: user.email };
        const option = { upsert: true };
        const update = { $set: status };
        const result = await haiku4.updateOne(filter, update, option);
      });

      // PUT API FOR ADMIN
      app.put("/users/admin", async (req, res) => {
        const user = req.body;
        const filter = { email: user.email };
        const update = { $set: { role: "admin" } };
        const result = await haiku5.updateOne(filter, update);
        req.json(result);
      });
      //DELETE API
      app.delete("/users-info/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await haiku4.deleteOne(query);
        console.log("deleteing user with id", result);
        res.json(result);
      });
      //DELETE API FOR DOCTOR-LIST
      app.delete("/doctorlist/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await haiku3.deleteOne(query);
        console.log("deleteing user with id", result);
        res.json(result);
      });

    } finally {
      // await client.close();
    }
  }
  run().catch(console.dir);
});
