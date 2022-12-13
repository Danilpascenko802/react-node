import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Main from "./pages/Main";
import Customers from "./pages/Customers";
import Masters from "./pages/Masters";
import Contacts from "./pages/Contacts";
import Support from "./pages/Support";
import TermsOfUse from "./pages/Terms-of-use";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/сustomers" element={<Customers />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/сontacts" element={<Contacts />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms of use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
