import mongoose from "mongoose";
// import dotenv from "dotenv";
const MONGO_URI = "mongodb+srv://gautampbx1:PZbNT0OpkjN2FbNK@cluster0.lzdcv.mongodb.net/ecard"
// dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      // tls: true,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB