import React from 'react'

const WorkCard = ({image,title}) => {
  return (
    <div className='border-[1px] rounded-md'>
        <div className='relative w-[280px] h-[350px] overflow-hidden'>
            <img className='w-full h-full object-cover   ' src={image} alt="Cover-img" />
            <h2 className='font-bold outline px-2 py-1 rounded-md bg-green-700 bg-opacity-[0.60] text-2xl absolute bottom-3 right-4'>{title}</h2>
        </div>
    </div>
  )
}

export default WorkCard