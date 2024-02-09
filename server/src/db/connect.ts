import mongoose from "mongoose";

const connectDB = async (uri: string) =>{
  mongoose.set('strictQuery', true);

  try {
    const conection = await mongoose.connect(uri);
    // console.log(conection);
    console.log('Connected to mongoDB.');
  } catch (err) {
    
    console.log(err);
    console.log('Failed to connect to mongoDB.');
  }
}

export default connectDB;