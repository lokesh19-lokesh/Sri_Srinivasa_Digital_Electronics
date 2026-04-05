export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="nav-logo">Sri Srinivasa<span> Digital Electronics</span></div>
          <p className="footer-desc">
            Professional TV Repair Service. Fast, reliable, and affordable. We identify issues at the component level with precision tools.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>
            <strong>Address:</strong><br />
            Plot No. 18, Flat No. 102,<br />
            Usha Mullapudi Road, Vivekanandha Nagar,<br />
            Kukatpally, Hyderabad, Telangana 500072
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+918008859990">+91 80088 59990</a>
          </p>
          <p>
            <strong>Website:</strong> <a href="https://srisrinivasadigital.com" target="_blank" rel="noopener noreferrer">srisrinivasadigital.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Srinivasa Digital Electronics. All rights reserved.</p>
      </div>
    </footer>
  );
}
