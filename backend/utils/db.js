import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://codadity:nkzydw1KGvnJtbaY@cluster0.pl1lv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;