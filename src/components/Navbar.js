import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="p-4 bg-red-900 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Navbar