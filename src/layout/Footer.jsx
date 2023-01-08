import React from "react";
import "./style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Made with <i className="bx bxs-heart"></i> by Alan Yeverino
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/alan-yeverino-1b160754/"
          target="_blank"
        >
          @lanyev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
