import React from "react";
import BlogCard from "@/components/blog/Blog";
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
