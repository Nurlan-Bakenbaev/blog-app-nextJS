import React from "react";
import BlogCard from "@/components/blog/Blog";
import Link from "next/link";
const Blog = () => {
  return (
   <div className="flex flex-col gap-10">
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
   </div>
  );
};

export default Blog;