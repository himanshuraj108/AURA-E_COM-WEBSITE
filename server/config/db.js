import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connection success");
    });

    mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("MongoDB Connection failed", error);
  }
};

export default dbConnect;
