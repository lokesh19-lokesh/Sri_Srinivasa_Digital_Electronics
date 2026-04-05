import { Link } from 'react-router-dom';

const BubblesLink = () => {
  return (
    <a href="https://thebubblesmedia.com/" target="_blank" rel="noopener noreferrer" className="bubbles-link">
      The Bubbles Media
      <span className="bubble b1"></span>
      <span className="bubble b2"></span>
      <span className="bubble b3"></span>
      <span className="bubble b4"></span>
      <span className="bubble b5"></span>
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <div className="nav-logo">Sri Srinivasa<span> Digital</span></div>
          <p className="footer-desc">
            Hyderabad's trusted TV repair experts. Providing precise component-level diagnostics and same-day doorstep service for all major brands. Your entertainment, restored.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/booking">Book Repair</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact Information</h4>
          <p className="contact-item">
            <strong>📍 Address:</strong><br />
            Plot No. 18, Flat No. 102,<br />
            Usha Mullapudi Road, Vivekanandha Nagar,<br />
            Kukatpally, Hyderabad, Telangana 500072
          </p>
          <p className="contact-item">
            <strong>📞 Helpline:</strong> <a href="tel:+918008859990" className="call-link">+91 80088 59990</a>
          </p>
          <p className="contact-item">
            <strong>✉️ Email:</strong> <a href="mailto:support@srisrinivasadigital.com" className="call-link">support@srisrinivasadigital.com</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>&copy; 2026 Sri Srinivasa Digital Electronics. All rights reserved.</p>
        <p className="designer-credit">Designed by <BubblesLink /></p>
      </div>
    </footer>
  );
}
