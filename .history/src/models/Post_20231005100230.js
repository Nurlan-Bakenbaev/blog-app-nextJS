import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwo: {
    type: String,
    unique: true,
    required: true,
  },
});
