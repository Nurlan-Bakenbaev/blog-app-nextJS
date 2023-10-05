import mongoose from "mongoose";
const { Schema } = mongoose;
const postSchema = new Schema(
  {
    title: {
      type: String,
      
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Post", userSchema);