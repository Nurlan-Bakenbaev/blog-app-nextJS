import React from "react";
import Image from "next/image";
import AboutImage from "/public/AboutImage.jpg";
const About = () => {
  return (
    <div className="">
      <div className="relative w-full  h-[45vh] flex items-center justify-center overflow-hidden">
        <Image src={AboutImage} />
      </div>
    <div>
      <h2>  <h2>Stories worth sharing</h2></h2>
      <p></p>
    </div>
      <div className="flex flex-row justify-between items-center">
        <article>1</article>
        <article>2</article>
      </div>
    </div>
  );
};

export default About;
