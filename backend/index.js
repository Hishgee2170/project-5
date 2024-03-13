import express, { request } from "express";
import cors from "cors";
import { sql } from "./config/database.js";
import { v4 as uuid } from "uuid";
const app = express();
import bcrypt from "bcrypt";

app.use(cors());
app.use(express.json());

app.post("/signUp", async (request, response) => {
  let jump = false;
  console.log(request.body);
  const hash = await bcrypt.hash(request.body.password, 10);
  const id = uuid();
  const [existingUser] =
    await sql`SELECT * FROM users WHERE email = ${request.body.email}`;
  if (!existingUser) {
    jump = !jump;
    await sql`INSERT INTO users(id, name, email, password) VALUES(${id}, ${request.body.name}, ${request.body.email}, ${hash})`;
    response.status(201).send(jump);
  } else {
    response.status(409).send(jump);
  }
});

app.post("/signIn", async (request, response) => {
  const { email, password } = request.body;
  let jump = false;
  const [user] = await sql`SELECT * FROM users WHERE email = ${email}`;
  if (!user) {
    return response.status(401).send("Invalid email or password");
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    jump = !jump;
    return response.status(200).send(jump);
  } else {
    return response.status(401).send(jump);
  }
});

app.listen(2000, () => {
  console.log("2000 started");
});
