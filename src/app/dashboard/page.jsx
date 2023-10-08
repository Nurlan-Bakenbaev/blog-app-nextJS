"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const DashBoard = () => {
  const session = useSession();
  console.log(session);
  return <Link href={"/dashboard/login"}><div>Sign in</div></Link> 
}

export default DashBoard;
