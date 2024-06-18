import React from 'react'
import { Header } from './Header';
import Features from './Features';
import Testimonials from './Testimonials';
import Contacts from './Contacts';
import Footer from './Footer';


const Home = () => {
  return (
    <div className=" bg-blue-950 text-center text-slate-300">
      <Header />
      <Features />
      <Testimonials />
      <Contacts />
      <Footer/>
    </div>
  )
}

export default Home