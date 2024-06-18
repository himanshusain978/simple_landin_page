import React from 'react'
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
        <div className=' border-t-2 m-5'></div>
        <div>
            <div className='flex items-center justify-center pb-3'>
            <CiLinkedin />
            <a href='https://www.linkedin.com/in/himanshu-chhaparwal-7380b719b/'>Linkedln</a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer