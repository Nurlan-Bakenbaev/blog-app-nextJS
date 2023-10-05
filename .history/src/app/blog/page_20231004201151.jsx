import React from "react";
import BlogCard from "@/components/blog/Blog";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-10">
      
      <Link href={"/blog/testId"}>
        <BlogCard />
      </Link>
    </div>
  );
};

export default Blog;
