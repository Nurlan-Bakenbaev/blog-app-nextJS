import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect()
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
