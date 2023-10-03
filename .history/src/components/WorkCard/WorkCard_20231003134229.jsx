import React from 'react'
import Image from 'next/image'

const WorkCard = ({image,category}) => {
  return (
    <div className='border-2'>
<Image
style={{ overflow:'hidden', objectFit:'fill' }}
 alt='Cover-Image' 
 src={image}
 width={280} 
 height={350}/>
    </div>
  )
}

export default WorkCard