import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className=''>
      <div>
        <Image 
        src='https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
        width='1' height='30vh'/>
      </div>
      <div className='flex flex-row justify-between items-center'>
       <article>1</article>
       <article>2</article>

      </div>
    </div>
  )
}

export default About