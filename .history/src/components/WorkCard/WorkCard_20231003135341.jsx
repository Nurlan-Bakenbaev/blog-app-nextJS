import React from 'react'

const WorkCard = ({image}) => {
  return (
    <div className='border-1'>
        <div className='w-[280px] h-[350px] overflow-hidden ob'>
            <img className='w-full h-full  ' src={image} alt="Cover-img" />
        </div>
    </div>
  )
}

export default WorkCard