export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>About <span className="text-gradient">Sri Srinivasa Digital</span></h1>
        <p>Your Trusted TV Care Experts Since Day One.</p>
      </div>

      <section className="about-grid-section">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="glow-text">Mastering the Art of Display Repair</h2>
            <p className="lead-text">
              At Sri Srinivasa Digital Electronics, we specialize in repairing LED, LCD, Plasma, and Smart TVs of all major brands. With years of hands-on experience, our skilled technicians ensure accurate diagnosis and provide reliable solutions for every issue — from screen repairs to motherboard and power supply problems.
            </p>
            <div className="commitment-box">
              <h3>Our Commitment</h3>
              <p>We are dedicated to offering fast, affordable, and high-quality repair services with complete transparency. Customer satisfaction is at the heart of everything we do, and we take pride in restoring your entertainment without hassle. Our workshop is equipped with modern tools to ensure long-lasting results you can trust.</p>
            </div>
            
            <div className="why-choose-list">
              <div className="why-item">
                <span className="icon">✓</span>
                <p>Expert technicians with proven experience</p>
              </div>
              <div className="why-item">
                <span className="icon">✓</span>
                <p>Quick turnaround time and fair pricing</p>
              </div>
              <div className="why-item">
                <span className="icon">✓</span>
                <p>Reliable, professional, and guaranteed service</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <img src="/assets/about_hero.png" alt="Advanced TV Repair Facility" />
              <div className="image-overlay"></div>
            </div>
            <div className="stats-badge">
              <span className="stat-number">10k+</span>
              <span className="stat-label">TVs Repaired</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
