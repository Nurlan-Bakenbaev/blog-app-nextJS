import Image from 'next/image'
import heroImg from "public/hero.png"
export default function Home() {
  return (
    <div className='flex justify-center'>
      <Image className='' src={heroImg} alt='Hero Image'/>
    </div>
  )
}
