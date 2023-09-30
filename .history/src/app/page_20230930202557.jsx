import Image from "next/image";
import heroImg from "public/hero.png";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-5xl py-6 ">Exploring Ideas, Sharing Knowledge</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia debitis iusto rem doloremque sapiente, doloribus architecto inventore ab ex reprehenderit enim delectus quasi eligendi et? Asperiores qui dolore repellat?</p>
      </div>
      <Image width={900} height={900} className="px-auto" src={heroImg} alt="Hero Image" />
    </div>
  );
}