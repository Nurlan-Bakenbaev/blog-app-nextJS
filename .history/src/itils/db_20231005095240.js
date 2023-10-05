import mongoose from "mongoose";

const connetc = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        handleError(error);
      }
}