import express from "express";
import cors from "cors";
import { sql } from "./config/database.js";
import { v4 as uuid } from "uuid";
const app = express();
app.use(cors());
app.use(express.json());
let datas = [];
const DATA_BASE = "dataBase.json";
app.get("/user", async (request, response) => {
  datas = await sql`SELECT * FROM users`;
  response.send(datas);
});

app.post("/user", async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const id = uuid();
    const newUser = { id, name, email, password };
    await sql`INSERT INTO users(id, name, email, password) VALUES(${newUser.id}, ${newUser.name}, ${newUser.email}, ${newUser.password})`;
    datas = await sql`SELECT * FROM users`;
    response.status(201).send(datas);
  } catch (error) {
    console.error("Error:", error.message);
    response.status(500).send("Internal Server Error");
  }
});

app.listen(2000, () => {
  console.log("2000 started");
});
