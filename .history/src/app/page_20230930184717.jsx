import Image from 'next/image'
import heroImg from "public/hero.png"
export default function Home() {
  return (
    <div>
      <Image src="hero.png" width={50}height={50}/>
    </div>
  )
}
