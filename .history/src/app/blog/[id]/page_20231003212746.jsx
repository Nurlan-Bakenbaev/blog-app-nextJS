import React from "react";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <h1 className="text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            aspernatur quod?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            doloribus veritatis autem neque possimus voluptatem enim soluta odit
            rerum nulla!
          </p>
        </div>
        <div>
    <Image />
        </div>
      </div>
      <div>3</div>
    </div>
  );
};

export default BlogPost;
