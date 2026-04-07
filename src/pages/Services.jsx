import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <h1>Our <span className="text-gradient">Services</span></h1>
        <p>Complete repair solutions for LED, Smart, OLED & QLED TVs.</p>
        <p className="hero-subline">Inspection charges at just ₹299. High Customer Satisfaction.</p>
      </div>

      <section className="services-feed">
        
        {/* Service 1 */}
        <div className="service-row">
          <div className="service-image">
            <img src="/assets/service_panel.png" alt="LED & LCD Display Panel Repair" />
            <div className="image-overlay"></div>
          </div>
          <div className="service-info">
            <h3 className="glow-text" style={{ color: 'var(--accent-red)' }}>LED, LCD & OLED Display Repair</h3>
            <p>We fix backlight issues, panel problems, and display malfunctions. Utilizing high-tech laser diagnostics to salvage delicate glass components safely.</p>
            <ul className="service-checklist">
              <li>✓ Backlight Replacements</li>
              <li>✓ T-Con Board Repairs</li>
              <li>✓ Color Calibration & Burn-in Treatment</li>
              <li>✓ Dead Pixel Fixes</li>
            </ul>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-row reverse">
          <div className="service-image">
            <img src="/assets/service_smart.png" alt="Smart TV Logic Board Soldering" />
            <div className="image-overlay"></div>
          </div>
          <div className="service-info">
            <h3 className="text-gradient">Smart TV System Diagnostics</h3>
            <p>Comprehensive services for resolving software glitches, connectivity issues, and intricate hardware malfunctions in complex Smart TV platforms (Android TV, WebOS, Tizen).</p>
            <ul className="service-checklist">
              <li>✓ Firmware/Software Updates</li>
              <li>✓ WiFi & Bluetooth Antenna Fixes</li>
              <li>✓ Logic Board Micro-Soldering</li>
              <li>✓ Bootloop & OS Recovery</li>
            </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-row">
          <div className="service-image">
            <img src="/assets/service_power.png" alt="Power Supply & Component Replacement" />
            <div className="image-overlay"></div>
          </div>
          <div className="service-info">
            <h3 className="text-gradient">Motherboard & Power Unit Repairs</h3>
            <p>TV won't turn on? We isolate, diagnose and surgically repair power supply units (SMPS) and main boards utilizing genuine OEM components for unmatched stability.</p>
            <ul className="service-checklist">
              <li>✓ SMPS Board Fixing</li>
              <li>✓ Main Board Replacement</li>
              <li>✓ Swollen Capacitor Removal</li>
              <li>✓ Audio IC & TV Sound Restoration</li>
            </ul>
          </div>
        </div>

      </section>

      <div style={{ textAlign: 'center', paddingBottom: '80px' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Ready for a Doorstep Repair?</h2>
        <Link to="/booking" className="btn-cta" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>Schedule Now - ₹299 Inspection</Link>
      </div>
    </>
  );
}
