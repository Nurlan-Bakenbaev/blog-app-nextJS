import React from 'react'
import Image from 'next/image'

const WorkCard = ({image,category}) => {
  return (
    <div className='border-2'>
<Image

 alt='Cover-Image' 
 src={image}
 layout='fill'
 objectFit='cover'/>
    </div>
  )
}

export default WorkCard