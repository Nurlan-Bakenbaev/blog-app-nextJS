import React from 'react'

const Category = ({params}) => {

  return (
    <div>
        <h2 className=' capitalize text-2 '>{params.category}</h2>
    </div>
  )
}

export default Category