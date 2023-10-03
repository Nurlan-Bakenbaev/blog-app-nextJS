import React from 'react'

const WorkCard = ({image}) => {
  return (
    <div className='border-1'>
        <div>
            <img src={image} alt="Cover-inf" />
        </div>
    </div>
  )
}

export default WorkCard