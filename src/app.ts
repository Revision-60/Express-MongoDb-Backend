import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import db from "mongoose";
import routes from "./routes";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());
app.use(urlencoded());

app.use("/", routes);

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ state: "Error", message: error });
});

db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    console.log("Db Connected");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on Port 5000");
    });
  })
  .catch((error) => {
    console.log("Something went wrong");
  });