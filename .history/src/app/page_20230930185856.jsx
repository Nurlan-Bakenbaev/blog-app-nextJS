import Image from "next/image";
import heroImg from "public/hero.png";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Exploring Ideas, Sharing Knowledge</h1>
        
      </div>
      <Image className="px-auto" src={heroImg} alt="Hero Image" />
    </div>
  );
}
