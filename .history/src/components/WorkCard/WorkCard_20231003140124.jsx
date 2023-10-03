import React from 'react'

const WorkCard = ({image,title}) => {
  return (
    <div className='border-[1px] rounded-md'>
        <div className='relative w-[280px] h-[350px] overflow-hidden'>
            <img className='w-full h-full object-cover   ' src={image} alt="Cover-img" />
            <h2 className='font-bold shadow-md text-2xl absolute bottom-3 right-4'>{title}</h2>
        </div>
    </div>
  )
}

export default WorkCard