import React from "react";
import Image from "next/image";
import AboutImage from "/public/AboutImage.jpg";
const About = () => {
  return (
    <div className=" relative">
      <div className=" w-full  h-[45vh] flex items-center justify-center overflow-hidden">
        <Image src={AboutImage} />
      </div>
    <div className="absolute bottom-7 ">
      <h1 className="text-4xl">Script writing</h1>
      <p>Stories worth sharing</p>
    </div>
      <div className="flex flex-row justify-between items-center">
        <article>1</article>
        <article>2</article>
      </div>
    </div>
  );
};

export default About;
