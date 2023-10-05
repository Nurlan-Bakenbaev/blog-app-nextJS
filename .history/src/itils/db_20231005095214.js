import mongoose from "mongoose";

const connetc = async()=>{
    try {
        await mongoose.connect(process.env);
      } catch (error) {
        handleError(error);
      }
}