import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" bg-blue-950 text-center text-slate-300">
      <Header />
      <Features />
      <Testimonials />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;