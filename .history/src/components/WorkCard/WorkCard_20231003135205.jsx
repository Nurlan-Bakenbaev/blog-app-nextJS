import React from 'react'

const WorkCard = ({image}) => {
  return (
    <div className='border-1'>
        <div className='obje'>
            <img src={image} alt="Cover-img" />
        </div>
    </div>
  )
}

export default WorkCard