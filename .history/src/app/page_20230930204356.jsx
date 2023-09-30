import Image from "next/image";
import heroImg from "public/hero.png";
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row p-3">
      <div className="border flex flex-col justify-center  md:w-[50%] w-full">
        <h1 className="text-5xl py-6 ">Exploring Ideas, Sharing Knowledge</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia debitis iusto rem doloremque sapiente, doloribus architecto inventore ab ex reprehenderit enim delectus quasi eligendi et? Asperiores qui dolore repellat?</p>
      </div>
      <Image className="px-auto border animate-bounce-custom overflow-y" src={heroImg} alt="Hero Image" />
    </div>
  );
}