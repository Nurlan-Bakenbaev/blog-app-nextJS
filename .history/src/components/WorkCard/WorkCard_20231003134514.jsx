import React from 'react'
import Image from 'next/image'

const WorkCard = ({image,category}) => {
  return (
    <div className='border-2'>
<Image

 alt='Cover-Image' 
 src={image}
 width={180} 
 height={250}
 layout='responsive'
 objectFit='cover'
 over/>
    </div>
  )
}

export default WorkCard