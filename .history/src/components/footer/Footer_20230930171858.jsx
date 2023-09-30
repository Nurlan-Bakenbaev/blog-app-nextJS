import React from 'react'
import {AiOutlineFacebook} from 'react-icons/Ai'
import {FiInstagram} from 'react-icons/Ai'
import {AiOutlineLinkedin} from 'react-icons/Ai'
import {FiTwitter} from 'react-icons/Ai'



import Link from 'next/link'
const Footer = () => {
  return (
    <footer className=' flex flex-row justify-between py-5 items-center'>
      <div > 2023 Bakenbaev. All rights reserved</div>
      <div className='flex flex-row'>
     <Link href="https://www.facebook.com/">  <AiOutlineFacebook/></Link>
     <Link href="https://www.instagram.com/">  <AiOutlineInstagram/></Link>
     <Link href="https://www.instagram.com/">  <AiOutlineLinkedin/></Link>
     <Link href="https://www.instagram.com/">  <AiOutlineInstagram/></Link>
   

      </div>
    </footer>
  )
}

export default Footer