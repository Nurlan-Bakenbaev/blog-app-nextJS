import React from 'react'
import Image from 'next/image'

const WorkCard = ({image,category}) => {
  return (
    <div className='border-2'>
<Image src={image}width={300}/>
    </div>
  )
}

export default WorkCard