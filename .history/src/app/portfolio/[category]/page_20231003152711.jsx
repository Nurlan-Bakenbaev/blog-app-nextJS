import React from 'react'

const Category = ({params}) => {

  return (
    <div>
        <h2 className=' capitalize text-2xl text-green-600'>{params.category}</h2>
        <div>
            <div></div>
        </div>
    </div>
  )
}

export default Category