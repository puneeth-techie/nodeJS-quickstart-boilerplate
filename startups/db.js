import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Connected to DB: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
