import mongoose from "mongoose";

const connetc = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Eror("Connection failed");
  }
};
export default