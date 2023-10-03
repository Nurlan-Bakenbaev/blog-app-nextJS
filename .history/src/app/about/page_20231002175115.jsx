import React from 'react'
import Image from 'next/image'
import AboutImage from '/public/AboutImage.jpg'
const About = () => {
  return (
    <div className=''>
      <div className='w-full h-[50vh'>
        <Image src={AboutImage}/>
      </div>
      <div className='flex flex-row justify-between items-center'>
       <article>1</article>
       <article>2</article>

      </div>
    </div>
  )
}

export default About