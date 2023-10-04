import React from "react";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="text-4xl m-10">
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
    <Image src={'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2907&q=80'}
    width={800}height={300}
    />
        </div>
      </div>
      <div>3</div>
    </div>
  );
};

export default BlogPost;
