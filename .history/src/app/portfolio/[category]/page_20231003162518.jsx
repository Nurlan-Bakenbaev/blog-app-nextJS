import React from "react";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div>
      <h2 className=" capitalize text-2xl text-green-600">{params.category}</h2>
      <div className="flex  items-center gap-12">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Creative content</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            explicabo soluta nulla nihil excepturi officia aspernatur error rem
            saepe quo ducimus sit, voluptas labore modi?
          </p>
          <button className="px-4 py-2">See More</button>
        </div> 
        <div>
            <Image width={550} height={550} src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80' />
        </div>
      </div>
    </div>
  );
};

export default Category;
