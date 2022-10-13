import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/*import ReactDOM from "react-dom";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainPage";
import Masters from "./components/masters";
/**/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Mainpage />} />
        <Route path="masters" element={<Masters />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
<React.StrictMode>
<App />
</React.StrictMode>*/
/*<Route path="contact" element={<Contact />} />*/
/*<Route path="*" element={<NoPage />} />*/
