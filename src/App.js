import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Second from './components/Second';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className=" bg-blue-950 text-center w-screen min-h-screen text-slate-300">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    </div>
  );
}

export default App;