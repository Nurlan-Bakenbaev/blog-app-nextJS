import React from 'react'

const Category = ({params}) => {

  return (
    <div>
        <h2 className='text-wh'>{params.category}</h2>
    </div>
  )
}

export default Category