import React from 'react'
import {AiOutlineFacebook} from 'react-icons/Ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className=' flex flex-row justify-between py-5 items-center'>
      <div > 2023 Bakenbaev. All rights reserved</div>
      <div className='flex flex-row'>
     <Link></Link>
     <AiOutlineFacebook/>

      </div>
    </footer>
  )
}

export default Footer