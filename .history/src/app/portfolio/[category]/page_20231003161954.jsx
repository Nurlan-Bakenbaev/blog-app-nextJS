import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <h2 className=" capitalize text-2xl text-green-600">{params.category}</h2>
      <div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Creative content</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            explicabo soluta nulla nihil excepturi officia aspernatur error rem
            saepe quo ducimus sit, voluptas labore modi?
          </p>
          <button className="px-">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
