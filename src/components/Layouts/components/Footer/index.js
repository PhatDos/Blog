import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="#!" aria-label="Facebook">
          <FaFacebook /> <span>Facebook</span>
        </a>
        <a href="#!" aria-label="Twitter">
          <FaTwitter /> <span>Twitter</span>
        </a>
        <a href="#!" aria-label="Instagram">
          <FaInstagram /> <span>Instagram</span>
        </a>
        <a href="#!" aria-label="LinkedIn">
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <a href="#!" aria-label="YouTube">
          <FaYoutube /> <span>YouTube</span>
        </a>
        <a href="#!" aria-label="GitHub">
          <FaGithub /> <span>GitHub</span>
        </a>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
