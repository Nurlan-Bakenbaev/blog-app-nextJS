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
            <div className="mt-10 w-[50px] h-[50px] rounded-[50%] overflow-hidden">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2760&q=80"
                alt="Account-Img"
              />
            </div>
            <p className="text-white m-3">John Doe</p>
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
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iure
          sequi esse placeat deserunt nulla asperiores aliquid aliquam,
          reprehenderit ipsa dolorum dolorem neque assumenda voluptatibus nisi
          blanditiis omnis impedit voluptatum. Placeat, modi maiores. Recusandae
          corrupti asperiores ipsa eligendi vero nobis modi facere, enim quos
          veniam rerum tenetur? Illum, debitis nesciunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iure
          sequi esse placeat deserunt nulla asperiores aliquid aliquam,
          reprehenderit ipsa dolorum dolorem neque assumenda voluptatibus nisi
          blanditiis omnis impedit voluptatum. Placeat, modi maiores. Recusandae
          corrupti asperiores ipsa eligendi vero nobis modi facere, enim quos
          veniam rerum tenetur? Illum, debitis nesciunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iure
          sequi esse placeat deserunt nulla asperiores aliquid aliquam,
          reprehenderit ipsa dolorum dolorem neque assumenda voluptatibus nisi
          blanditiis omnis impedit voluptatum. Placeat, modi maiores. Recusandae
          corrupti asperiores ipsa eligendi vero nobis modi facere, enim quos
          veniam rerum tenetur? Illum, debitis nesciunt!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
