import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import styles from "../styles/footer.css";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer_logo"></div>
      <div className="footer_list">
        <Link to="/support" className="footer_link" id="footer_support_link">
          Support
        </Link>
        <Link to="/сontacts" className="footer_link" id="footer_contacts_link">
          Contacts
        </Link>
        <Link
          to="/terms of use"
          className="footer_link"
          id="footer_termsofuse_link"
        >
          Terms os use
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
