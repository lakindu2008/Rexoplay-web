import React from "react";
import "./style.css";

 const Subscribe = () => {
    alert("Subscribed ❤️");
  };

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Branding */}
        <div className="footer-col">
          <h2 className="logo">Rexoplay</h2>
          <p>Creating beautiful digital experiences with purpose and passion.</p>
        </div>

        <div className="links">
  {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://www.youtube.com/@codeBlocksLakindu">Youtube</a></li>
            <li><a href="https://github.com/lakindu2008">Github</a></li>
            <li><a href="https://www.instagram.com/lakindu_perera_/">Instargram</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        </div>
      

        {/* Newsletter */}
        <div className="footer-col newsletter" id="newsletter">
          <h3>Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your email"
              required
            />
            <button type="submit" onClick={Subscribe}>Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Rexoplay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
