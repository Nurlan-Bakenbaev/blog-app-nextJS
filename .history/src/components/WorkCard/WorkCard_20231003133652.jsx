import React from 'react'
import Image from 'next/image'

const WorkCard = ({image,category}) => {
  return (
    <div className='border-2'>
<Image alt='Cover-Image' src={image}width={280} height={350} layout="fixed" objectFit="cover"/>
    </div>
  )
}

export default WorkCard