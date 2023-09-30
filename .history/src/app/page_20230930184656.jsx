import Image from 'next/image'
import heroImg
export default function Home() {
  return (
    <div>
      <Image src="hero.png" width={50}height={50}/>
    </div>
  )
}
