import React from 'react'

const Testimonials = () => {
  return (
    <section className="Testimonials mt-10 ">
      <h2 className='text-3xl font-bold font-black'>What Our Students Say</h2>
      <div className='flex gap-4 justify-center p-3'>
        <div className="testimonial-item border rounded-md p-4 flex flex-col items-center">
            <h3 className='text-2xl font-medium'>ALEX</h3>
            <p>"JAMX transformed my career!"</p>
        </div>
        <div className="testimonial-item border rounded-md p-4 flex flex-col items-center ">
            <h3 className='text-2xl font-medium'>TAYLOR</h3>
            <p>"The best platform for learning new skills."</p>
        </div>
      </div>
      
    </section>
  )
}

export default Testimonials