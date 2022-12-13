import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footer">
      <img src="." alt="logo" />
      <div className="footer_list">
        <Link to="/support" className="footer_link">
          Support
        </Link>
        <Link to="/сontacts" className="footer_link">
          Contacts
        </Link>
        <Link to="/terms of use" className="footer_link">
          Terms os use
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
