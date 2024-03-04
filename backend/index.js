import express, { response } from "express";
import cors from "cors";
import fs from "fs";
import { sql } from "./config/database.js";
import { uuid } from "uuidv4";
import bcrypt from "bcrypt";
const app = express();
app.use(cors());
app.use(express.json());
let datas = [];
const DATA_BASE = "dataBase.json";
app.get("/", async (request, response) => {
  datas = JSON.parse(fs.readFileSync(`${DATA_BASE}`));
  const date = await sql`SELECT * FROM users`;
  response.send(date);
});

app.post("/user", async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuid();
    const newUser = { id, name, email, password: hashedPassword };
    await sql`INSERT INTO users(id, name, email, password) VALUES(${id}, ${name}, ${email}, ${hashedPassword})`;
    const existingData = JSON.parse(fs.readFileSync(`${DATA_BASE}`));
    existingData.push(newUser);
    fs.writeFileSync(`${DATA_BASE}`, JSON.stringify(existingData));
    response.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error.message);
    response.status(500).send("Internal Server Error");
  }
});

app.listen(2000, () => {
  console.log("2000 started");
});
