import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='px-3 '><h1 className='text-5xl font-bold'>Our works</h1>
    {children}
    </div>
  )
}

export default Layout