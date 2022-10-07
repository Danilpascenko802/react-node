import React from "react";
/*import Header from "./header"*/
import { Link } from "react-router-dom";
function Mainpage() {
  /*<Header />*/
  return (
    <div className="mainPage_box">
      <h2>Почему мы ?</h2>
      <h4>Потому что у нас есть календарик</h4>
      <ul>
        <li>
          {}
          <Link to="/react2.0/src/components/mainPage.jsx">MainPage</Link>
        </li>
        <li>
            {}
            <Link to="/react2.0/src/components/masters.jsx"></Link>
        </li>
      </ul>
    </div>
  );
}
export default Mainpage;
