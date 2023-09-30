import Image from "next/image";
import heroImg from "public/hero.png";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-5xl py-6 w-[70%]">Exploring Ideas, Sharing Knowledge</h1>
        <p className="w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia debitis iusto rem doloremque sapiente, doloribus architecto inventore ab ex reprehenderit enim delectus quasi eligendi et? Asperiores qui dolore repellat?</p>
      </div>
      <Image width={500} className="px-auto" src={heroImg} alt="Hero Image" />
    </div>
  );
}
