import React from 'react'
import Image from 'next/image'

const WorkCard = ({image,category}) => {
  return (
    <div className='border-2'>
<Image alt='Cover' src={image}width={280} height={350}  layout="responsive" // Use "responsive" layout to maintain aspect ratio
        objectFit="cover"/>
    </div>
  )
}

export default WorkCard