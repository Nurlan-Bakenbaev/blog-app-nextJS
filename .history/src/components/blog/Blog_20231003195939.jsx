import React from "react";
import Image
const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse  items-center gap-12  ">
      <div className="flex  flex-col items-start w-full md:w-[70%]">
        <h1 className="text-2xl font-bold">Creative content</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          explicabo soluta nulla nihil excepturi officia aspernatur error rem
          saepe quo ducimus sit, voluptas labore modi?
        </p>
        <button className="hover:bg-blue-400 px-4 py-2 mt-5 bg-green-500 rounded-lg  ">
          See More
        </button>
      </div>
      <div className="group">
        <Image
          width={350}
          height={150}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
        />
      </div>
    </div>
  );
};

export default Blog;
