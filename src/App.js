import React from "react";
import Header from "./components/header";
<<<<<<< HEAD
/*import Mainpage from "./components/mainPage";*/
import { Outlet } from "react-router-dom";
/*import Registration from "./components/registration"; */
/*import Masters from "./components/masters";*/
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";*/
/*import Contacts from "./components/contacts";*/
=======
import Home from './pages/Home';
import About from './pages/About';
import Masters from './pages/Masters';
import { Routes, Route } from 'react-router-dom';

>>>>>>> origin/fix-router
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


