import { NextResponse } from "next/server";
import connect from "@/itils/db";
import 
export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post;
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
