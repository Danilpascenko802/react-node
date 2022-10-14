import React from "react";
import Header from "./components/header";

import Home from './pages/Home';
import About from './pages/About';
import Masters from './pages/Masters';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/masters' element={<Masters/>}/>
      </Routes>
    </>
  );
}

export default App;


