import dotenv from "dotenv";

dotenv.config();

const PORT =  8080;
const URI = process.env.URI || "mongodb://localhost";
const DB = process.env.DB || "MONGO";
const BASE = process.env.BASE || "cineBase";

export default {
  PORT,
  URI,
  DB,
  BASE,
};
