import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/masters">Masters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;