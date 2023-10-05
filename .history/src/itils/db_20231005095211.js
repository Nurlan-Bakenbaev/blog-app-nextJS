import mongoose from "mongoose";

const connetc = async()=>{
    try {
        await mongoose.connect(process);
      } catch (error) {
        handleError(error);
      }
}