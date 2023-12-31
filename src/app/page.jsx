import Image from "next/image";
import heroImg from "public/hero.png";
import { Dancing_Script } from "next/font/google";
const mooli = Dancing_Script({weight:'400',subsets:['latin']})
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row p-3">
      <div className="flex flex-col justify-center  md:w-[50%] w-full">
        <h1 className="sm:text-3xl md:text-4xl lg:text-6xl py-2 md:py-4 font-bold ">Exploring <span className="text-green-500"> Ideas</span>, Sharing Knowledge</h1>
        <p className={mooli.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia debitis iusto rem doloremque sapiente, doloribus architecto inventore ab ex reprehenderit enim delectus quasi eligendi et? Asperiores qui dolore repellat?</p>
      <button className="w-[90%] mx-auto lg:w-full mt-5 p-2 bg-green-500 font-bold  rounded">Read the Blogs </button>
      </div>
      <Image className="px-auto animate-bounce-custom mt-7" src={heroImg} alt="Hero Image" />
    </div>
  );
}
