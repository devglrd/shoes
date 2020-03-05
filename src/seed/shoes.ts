import * as mongoose from 'mongoose';

export const ShoesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
});
