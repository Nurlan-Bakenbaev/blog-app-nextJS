import React from "react";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-full md:w-[70%]">
          <h1 className="text-4xl mb-8 mx-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            aspernatur quod?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            doloribus veritatis autem neque possimus voluptatem enim soluta odit
            rerum nulla! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Necessitatibus aut sed eos. Debitis accusantium earum possimus
            consectetur numquam hic explicabo!
          </p>
          <div>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2907&q=80"
            }
            width={800}
            height={300}
          />
        </div>
      </div>
      <div>3</div>
    </div>
  );
};

export default BlogPost;
