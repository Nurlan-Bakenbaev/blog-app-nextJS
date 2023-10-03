import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImage from "/public/AboutImage.jpg";
const About = () => {
  return (
    <div className=" overflow-hidden flex flex-col">
      <div className=" relative w-full  h-[45vh] flex items-center justify-center overflow-hidden">
        <Image src={AboutImage} />{" "}
        <div className="absolute  left-1 bottom-5 px-6 py-3 bg-green-600 ">
          <h1 className="text-4xl">Script writing</h1>
          <p>Stories worth sharing</p>
        </div>
      </div>

      <acticle className="flex flex-col gap-5  px-3 py-5 md:flex-row justify-between items-center">
        <div>
          <span className="px-12 text-3xl">Who are We?</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          facere quidem quisquam. Cum, harum? Vero ipsam harum praesentium
          necessitatibus repellendus sint ea assumenda magnam, hic quas
          recusandae minima nostrum iusto.
        </div>
        <div className="flex flex-col "> 
          <span className="px-12 text-3xl">Our mission?</span>
          <br />
         <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          facere quidem quisquam. Cum, harum? Vero ipsam harum praesentium
          necessitatibus repellendus sint ea assumenda magnam, hic quas
          recusandae minima nostrum iusto.</span>
         <Link className="text-white p-3 " href={'/contact'}>Contact</Link>
        </div>
      </acticle>
    </div>
  );
};

export default About;
