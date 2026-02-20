import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDb() {
  await mongoose.connect(env.MONGO_URI);
  console.log('MongoDB connected');
}
