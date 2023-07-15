import dotenv from "dotenv";
import { Db } from "mongodb";
import mongoose from "mongoose";

dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

// Use the username and password in your MongoDB connection string or wherever required

const dbName = "Post";
const connectionString = `mongodb+srv://odunowemeshack:W9nSSDaOOfIJ1LVe@cluster0.pjo8zad.mongodb.net/`;

const options = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

export const db = mongoose
  .connect(connectionString, options)
  .then((res) => {
    if (res) {
      console.log(`Database connected succesfully to ${dbName}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
