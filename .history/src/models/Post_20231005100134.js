import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema ({
    name:{
        type:String,
        unique
    }
})