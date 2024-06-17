import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <div className=' border-t-2 mt-5'></div>
        <div>
            <div className='flex items-center justify-center'>
            <CiLinkedin />
            <a href='https://www.linkedin.com/in/himanshu-chhaparwal-7380b719b/'>Linkedln</a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer