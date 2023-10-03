import React from 'react'

const WorkCard = ({image}) => {
  return (
    <div className='border-[1px] rounded-md'>
        <div className=' w-[280px] h-[350px] overflow-hidden'>
            <img className='w-full h-full object-cover   ' src={image} alt="Cover-img" />
        
        </div>
    </div>
  )
}

export default WorkCard