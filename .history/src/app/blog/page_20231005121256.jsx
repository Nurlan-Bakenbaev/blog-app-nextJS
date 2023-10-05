import React from "react";
import BlogCard from "@/components/blog/Blog";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts",
  {
    method: "GET",
    cache: "no-store", // Set cache to "no-store" to prevent caching
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-10">
      {data.map((item, id) => (
        <Link key={id} href={"/blog/testId"}>
          <BlogCard image={item.image} title={item.title} body={item.conten} />
        </Link>
      ))}
    </div>
  );
};

export default Blog;
