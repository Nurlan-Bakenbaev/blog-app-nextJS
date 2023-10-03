import React from 'react'

const WorkCard = ({image,title}) => {
  return (
    <div className='border-[1px] rounded-md'>
        <div className='relative w-[280px] h-[350px] overflow-hidden group'>
            <img className='w-full h-full object-cover group-hover:opacity-' src={image} alt="Cover-img" />
            <h2 className='font-bold  px-3 py-1 rounded-md bg-green-600 bg-opacity-[0.60] text-2xl absolute bottom-3 right-4 group-hover:bg-blue-500'>{title}</h2>
        </div>
    </div>
  )
}

export default WorkCard