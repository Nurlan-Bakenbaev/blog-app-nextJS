import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {

  }catch(err){
    return new NextResponse('Database Error',{status:500})
  }
  
};
