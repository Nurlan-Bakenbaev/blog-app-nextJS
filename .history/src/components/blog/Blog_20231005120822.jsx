import React from "react";
import Image from "next/image";
const BlogCard = ({ title, body }) => {
  return (
    <div className="border-b-[1px] flex flex-col md:flex-row-reverse  items-center gap-12  ">
      <div className="flex  flex-col items-start w-full md:w-[70%]">
        <h1 className="text-3xl font-bold capitalize">{title}</h1>

        <p>{body}</p>
      </div>
      <div className="group mb-6">
        <Image
          width={250}
          height={150}
          src={}
        />
      </div>
    </div>
  );
};

export default BlogCard;
