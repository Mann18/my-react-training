import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const myName = "Manan Patel";

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} {myName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
