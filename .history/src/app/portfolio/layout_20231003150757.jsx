import React from 'react'

const Layout = ({children}) => {
  return (
    <div><h1 className='text-4xl'>Our works</h1>
    {children}
    </div>
  )
}

export default Layout