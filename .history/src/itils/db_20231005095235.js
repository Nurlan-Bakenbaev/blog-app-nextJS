import mongoose from "mongoose";

const connetc = async()=>{
    try {
        await mongoose.connect(process.env.M);
      } catch (error) {
        handleError(error);
      }
}