import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
  <footer className="footer">
  <div className="footer-container">

    <div className="footer-top">

      <div>
        <h4 className="footer-heading">Quick Links</h4>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Book a Free Scan</a>
          <a href="#">How it Works</a>
          <a href="#">Range of Aligners</a>
          <a href="#">Aligners vs Braces</a>
          <a href="#">FAQs</a>
        </div>
      </div>

      <div>
        <h4 className="footer-heading">Get In Touch Now!</h4>
        <div className="footer-contact">
          <a href="tel:+9101169328350">011-6932-8350</a>
          <a href="mailto:support@whistle.in">
            support@whistle.in
          </a>
        </div>
      </div>

      <div className="footer-social">
        <h4 className="footer-heading">Follow us on</h4>
        <div className="footer-social-icons">
           <FaInstagram /> <FaFacebook /> <FaXTwitter />
        </div>
      </div>

      <div className="footer-policy">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>

    </div>

  </div>
</footer>
  );
}

export default Footer;