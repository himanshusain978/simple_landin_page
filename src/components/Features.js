import React from 'react'
import { MdStars } from "react-icons/md";

const Features = () => {
  return (
    <section className="Features p-3 mt-10">
      <h2 className=' text-3xl font-bold font-black'>Our Features</h2>
      <div className='flex justify-center gap-4 mt-4'>
        <div className="feature-item border rounded-md p-4 flex flex-col items-center">
            <MdStars />
            <h3 className=' text-2xl font-semibold'>Interactive Courses</h3>
            <p>Engage with interactive content designed by experts.</p>
        </div>
        <div className="feature-item border rounded-md p-4 flex flex-col items-center">
        <MdStars />
            <h3 className=' text-2xl font-semibold'>Personalized Learning</h3>
            <p>Customized learning paths for every student.</p>
        </div>
        <div className="feature-item border rounded-md p-4 flex flex-col items-center">
        <MdStars />
            <h3 className=' text-2xl font-semibold'>Certification</h3>
            <p>Earn certificates recognized by industry leaders.</p>
        </div>
      </div>
      
    </section>
  )
}

export default Features