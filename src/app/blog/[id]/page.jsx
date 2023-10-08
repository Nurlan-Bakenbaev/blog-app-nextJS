import React from "react";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`
  http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <div className="w-full md:w-[70%]">
          <h1 className="text-4xl mb-8 mx-3">{data.title}</h1>
          <p>{data.body}</p>
          <div>
            <div className="mt-10 w-[50px] h-[50px] rounded-[50%] overflow-hidden">
              <img
                className="object-cover"
                src={data.image}
                alt="Account-Img"
              />
            </div>
            <p className="text-white m-3">{data.userName}</p>
          </div>
        </div>
        <div>
          <Image src={data.image} width={800} height={300} />
        </div>
      </div>
      <div className=" mt-10 mb-10 flex flex-col gap-8">
        <p>{data.conten}</p>
      </div>
    </div>
  );
};

export default BlogPost;
