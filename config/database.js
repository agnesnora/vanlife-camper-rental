import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if already connected to the database

  if (connected) {
    console.log("already connected to MongoDB");
    return;
  }

  // connect to MongoDB

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDb is connected");
  } catch (error) {
    console.log("error:", error);
  }
};

export default connectDB;
