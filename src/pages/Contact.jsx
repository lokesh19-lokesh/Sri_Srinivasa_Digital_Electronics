export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (UI Only)');
  };

  return (
    <>
      <div className="page-hero">
        <h1>Get in <span className="text-gradient">Touch</span></h1>
        <p>Have a question or need emergency support? We're here to help.</p>
        <div style={{ marginTop: '20px', display: 'inline-block', padding: '10px 20px', background: 'rgba(233, 62, 45, 0.1)', borderRadius: '30px', border: '1px solid var(--accent-red)' }}>
          <p style={{ color: 'var(--text-primary)', margin: 0 }}>
            TV Repairing Services Helpline: <a href="tel:+918008859990" style={{ color: 'var(--accent-red)', textDecoration: 'none', fontWeight: 'bold' }}>+91 80088 59990</a>
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-grid">
          
          {/* Contact Details & Map */}
          <div className="contact-details">
            <h2 className="glow-text">Visit Our Service Center</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
              Drop by our expert repair center for an immediate diagnostic, or contact us directly. We use state-of-the-art tools to resolve your TV issues.
            </p>
            
            <div className="info-block">
              <h4>📍 Address</h4>
              <p>Plot No. 18, Flat No. 102, Usha Mullapudi Road, Vivekanandha Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
            </div>
            
            <div className="info-block">
              <h4>📞 Phone</h4>
              <p><a href="tel:+918008859990">+91 80088 59990</a></p>
            </div>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2548564245403!2d78.40285971116728!3d17.4953434833412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91bbfea53a71%3A0x714131e42bb312cd!2sSri%20Srinivasa%20Digital%20Electronics!5e0!3m2!1sen!2sin!4v1775408481955!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Srinivasa Digital Electronics Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us A Message</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Fill out the form below and our engineers will get back to you shortly.</p>
            
            <form className="premium-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Your Email address" required />
              </div>
              <div className="input-group">
                <input type="tel" placeholder="Your Phone Number" required />
              </div>
              <div className="input-group">
                <textarea placeholder="Describe the issue with your TV..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-cta submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
