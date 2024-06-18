import React from 'react'
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className="Header p-5">
      
      <h1 className=' text-4xl font-extrabold'>Welcome to JAMX</h1>
      <p>Your gateway to world-class education.</p>
      <Link to={"/second"}><button className=' px-2 py-2 bg-cyan-200 cursor-pointer mt-4 rounded-md'>Get Started</button></Link>
  
    </header>
  )
}
