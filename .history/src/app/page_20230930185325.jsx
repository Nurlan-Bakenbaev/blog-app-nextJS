import Image from 'next/image'
import heroImg from "public/hero.png"
export default function Home() {
  return (
    <div className='flex justify-center'>
      <Image className="px-auto" src={heroImg} alt='Hero Image'/>
    </div>
  )
}
