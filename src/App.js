import React from "react";
import Header from "./components/header";
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
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

/*<Route path="/components/contacts.jsx" component={<Contacts />} />*/

/*<>
    {}
    <Router>
      <Switch>
        <Route exact path="/" component={<Mainpage />} />
        <Route path="/components/masters.jsx" component={<Masters />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </> */
