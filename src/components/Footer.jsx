import { mySocials } from "../constants/projects";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider" />

      <div className="footer-links">
        <a href="/terms">Terms & Conditions</a>
<span>|</span>
<a href="/privacy">Privacy Policy</a>

      </div>

      <div className="footer-socials">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="social-icon"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="footer-copy">© 2025 Yeison Tobon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
