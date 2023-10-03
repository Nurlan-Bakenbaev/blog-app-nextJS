import React from "react";
import Image from "next/image";
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

      <div className="flex mdflex-row justify-between items-center">
        <article>
          <span className="px-12">Who are We ?</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          facere quidem quisquam. Cum, harum? Vero ipsam harum praesentium
          necessitatibus repellendus sint ea assumenda magnam, hic quas
          recusandae minima nostrum iusto.
        </article>
        <article>
          <span className="px-12">Who are We ?</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          facere quidem quisquam. Cum, harum? Vero ipsam harum praesentium
          necessitatibus repellendus sint ea assumenda magnam, hic quas
          recusandae minima nostrum iusto.
        </article>
      </div>
    </div>
  );
};

export default About;
