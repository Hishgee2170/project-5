import express, { response } from "express";
import cors from "cors";
import fs from "fs";
import { uuid } from "uuidv4";
const app = express();
app.use(cors());
app.use(express.json());
let datas = [];
const DATA_BASE = "dataBase.json";
app.get("/user", (request, response) => {
  datas = JSON.parse(fs.readFileSync(`${DATA_BASE}`));
  response.send(datas);
});
app.post("/user", (request, response) => {
  datas = JSON.parse(fs.readFileSync(`${DATA_BASE}`));
  const { name, email, password } = request.body;
  const id = uuid();
  const newData = { id, name, email, password };
  console.log("newdata", newData);
  datas.push(newData);
  fs.writeFileSync(`${DATA_BASE}`, JSON.stringify(datas));
  response.send(datas);
});

app.listen(2000, () => {
  console.log("2000 started");
});
