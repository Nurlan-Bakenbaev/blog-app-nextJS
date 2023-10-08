import React from "react";
import BlogCard from "@/components/blog/Blog";
import Link from "next/link";

export const metadata = {
  title:"This is Blogs",
  description:"Blog page description"
}
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-10">
      {data.map((item) => (
        <Link key={item.id} href={`/blog/${item._id}`}>
          <BlogCard image={item.image} title={item.title} body={item.conten} />
        </Link>
      ))}
    </div>
  );
};

export default Blog;
