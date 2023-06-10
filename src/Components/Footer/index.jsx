import React from "react";
import logo from "../Forms/logo-white.png";

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "100px",
};

const logoStyle = {
  width: "100px",
  height: "auto",
  marginLeft: "-400px",
  transform: "scale(2.5)",
};

const linkContainerStyle = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "-800px",
  marginRight: "40px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginBottom: "20px",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        &copy; {new Date().getFullYear()} PlayWithBalls. All rights reserved.
      </div>
      <div>
        <img style={logoStyle} src={logo} alt="Logo" />
      </div>
      <div style={linkContainerStyle}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/about" style={linkStyle}>
          About Us
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </div>
      <div style={linkContainerStyle}>
        <a href="/privacy-policy" style={linkStyle}>
          Privacy Policy
        </a>
        <a href="/terms-of-service" style={linkStyle}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
