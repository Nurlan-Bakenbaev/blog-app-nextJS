import React from 'react'

const Layout = ({children}) => {
  return (
    <div><h1 className='text-5xl font-bold px-'>Our works</h1>
    {children}
    </div>
  )
}

export default Layout