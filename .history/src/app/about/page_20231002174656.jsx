import React from 'react'
import Image from 'next/image'
import AboutImage from '/About'
const About = () => {
  return (
    <div className=''>
      <div>
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