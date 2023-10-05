import React from "react";
import Image from "next/image";
const BlogCard = ({title,}) => {
  return (
    <div className="border-b-[1px] flex flex-col md:flex-row-reverse  items-center gap-12  ">
      <div className="flex  flex-col items-start w-full md:w-[70%]">
        <h1 className="text-2xl font-bold">Creative content</h1>

        <p>
       {main}
        </p>
       
      </div>
      <div className="group mb-6">
        <Image
          width={250}
          height={150}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
        />
      </div>
    </div>
  );
};

export default BlogCard;
