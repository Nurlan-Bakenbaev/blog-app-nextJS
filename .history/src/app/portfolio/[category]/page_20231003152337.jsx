import React from 'react'

const Category = ({params}) => {

  return (
    <div>
        <h2 className='text-white'>{params.Category}</h2>
    </div>
  )
}

export default Category