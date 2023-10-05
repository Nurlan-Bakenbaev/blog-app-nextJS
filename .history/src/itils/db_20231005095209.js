import mongoose from "mongoose";

const connetc = async()=>{
    try {
        await mongoose.connect(proce);
      } catch (error) {
        handleError(error);
      }
}