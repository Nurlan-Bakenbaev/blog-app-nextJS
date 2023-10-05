import { NextResponse } from "next/server";
import connect from "@/itils/db";
import Post from "@/models/Post";
export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new Nex
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
