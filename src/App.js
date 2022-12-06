import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Main from "./pages/Main";
import Customers from "./pages/Customers";
import Masters from "./pages/Masters";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/сustomers" element={<Customers />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/сontacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
