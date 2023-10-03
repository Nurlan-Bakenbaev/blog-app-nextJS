import React from 'react'

const WorkCard = ({image}) => {
  return (
    <div className='border-1'>
        <div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default WorkCard