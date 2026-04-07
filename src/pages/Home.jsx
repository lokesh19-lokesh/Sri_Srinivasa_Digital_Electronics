import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();
  const canvasRef = useRef();

  useGSAP(() => {
    // Initial hero animations
    const tl = gsap.timeline();
    tl.from(".hero-content h1", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
      .from(".hero-content p", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from(".hero-content .btn-cta", { opacity: 0, scale: 0.9, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3");

    // Scroll-triggered animations for other sections if needed
    gsap.from(".feature-card", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".features-row",
        start: "top 80%",
      }
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, { scope: container });

  return (
    <>
      <div className="hero-section" ref={container}>
        <div className="video-background">
          <video 
            src="/assets/tvherosection.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            id="hero-video"
          />
          <div className="video-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="text-gradient">Professional TV Repair</h1>
          <p className="glow-text">Fast. Reliable. Affordable.</p>
          <p className="hero-subtitle">We fix all LED, OLED, Smart TVs at your doorstep with 365 days warranty.</p>
          <Link to="/booking" className="btn-cta">
            Book Your Repair Now
          </Link>
        </div>
      </div>

      <section className="features-row">
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Same-Day Doorstep Service</h3>
        </div>
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>365 Days Repair Warranty</h3>
        </div>
        <div className="feature-card">
          <div className="icon">📺</div>
          <h3>All Brands LED, LCD, OLED</h3>
        </div>
        <div className="feature-card">
          <div className="icon">✓</div>
          <h3>Genuine Spare Parts</h3>
        </div>
      </section>

      <section className="premium-services-section">
        <div className="section-header">
          <h2>Expert TV Repair Services <span className="text-gradient-branded">in Hyderabad — All Brands, All Models</span></h2>
          <p className="section-subtitle">Professional grade LED, Smart, 4K, OLED & QLED TV repair delivered at your doorstep. We utilize genuine manufacturer parts and provide a comprehensive 365-day service guarantee. Transparent flat-fee inspection at only ₹299.</p>
        </div>
        
        <div className="services-grid-new">
          {/* Card 1 */}
          <div className="service-card-white">
            <div className="card-icon-box">📺</div>
            <h3>LED & LCD Surface Repair</h3>
            <span className="inspection-tag-green">Inspection charges @ ₹299</span>
            <p>Surgical-grade panel and display restoration for all leading brands like Samsung, Sony, and LG. We specialize in resolving line defects, screen flickering, and pixel malfunctions with factory-standard precision.</p>
            <ul className="card-checklist-v2">
              <li><span>✓</span> Backlight System Overhaul</li>
              <li><span>✓</span> T-Con Logic Rectification</li>
              <li><span>✓</span> Main Board Component Service</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="service-card-white">
            <div className="card-icon-box">📱</div>
            <h3>Smart TV Logic & OS Tuning</h3>
            <span className="inspection-tag-green">Inspection charges @ ₹299</span>
            <p>Advanced troubleshooting for Smart TV platforms (Android, WebOS, Tizen). Our experts resolve software bootloops, connectivity drops, and sluggish app performance while optimizing your system's core firmware.</p>
            <ul className="card-checklist-v2">
              <li><span>✓</span> OS & Firmware Optimization</li>
              <li><span>✓</span> WiFi/Bluetooth Module Fix</li>
              <li><span>✓</span> System Recovery & Setup</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="service-card-white">
            <div className="card-icon-box">🎨</div>
            <h3>Premium OLED & QLED Calibration</h3>
            <span className="inspection-tag-green">Inspection charges @ ₹299</span>
            <p>Specialized lab-grade care for high-end OLED and QLED panels. We provide professional pixel refresh, burn-in mitigation strategies, and high-precision panel care to maintain your TV's elite visual performance.</p>
            <ul className="card-checklist-v2">
              <li><span>✓</span> Professional Pixel Refresh</li>
              <li><span>✓</span> Burn-in Risk Mitigation</li>
              <li><span>✓</span> Ultra-Slim Panel Accuracy</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="service-card-white">
            <div className="card-icon-box">🔊</div>
            <h3>Cinematic Audio & Sound Repair</h3>
            <span className="inspection-tag-green">Inspection charges @ ₹299</span>
            <p>Full-spectrum audio diagnostics for all TV brands. We surgically repair speaker modules and audio ICs to eliminate distortion and restore the rich, clear sound your entertainment deserves.</p>
            <ul className="card-checklist-v2">
              <li><span>✓</span> Premium Speaker Calibration</li>
              <li><span>✓</span> Audio IC Micro-Repair</li>
              <li><span>✓</span> HDMI ARC Sync Restoration</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="service-card-white">
            <div className="card-icon-box">⚡</div>
            <h3>Industrial-Grade Motherboard Fix</h3>
            <span className="inspection-tag-green">Inspection charges @ ₹299</span>
            <p>If your device is unresponsive, our electronic experts troubleshoot the SMPS and main motherboard at the component level. We replace faulty capacitors and ICs with certified factory-grade parts.</p>
            <ul className="card-checklist-v2">
              <li><span>✓</span> SMPS Power Unit Restoration</li>
              <li><span>✓</span> Chip-Level Component Fix</li>
              <li><span>✓</span> Overvoltage Protection Service</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="service-card-white">
            <div className="card-icon-box">🏠</div>
            <h3>Hyderabad Elite Doorstep Service</h3>
            <span className="inspection-tag-green">Inspection charges @ ₹299 (Adjustable)</span>
            <p>Experience premier in-home TV repair across all Hyderabad residential areas. Our mobile service units bring the workshop to your door for fast, on-site diagnostics and immediate resolution of most issues.</p>
            <ul className="card-checklist-v2">
              <li><span>✓</span> Express Same-Day Availability</li>
              <li><span>✓</span> Mobile On-Site Diagnostics</li>
              <li><span>✓</span> Local Regional Support Units</li>
            </ul>
          </div>
        </div>

        <div className="trust-badges-flow">
          <div className="badge-pill-light"><span>✓</span> Certified Spare Parts</div>
          <div className="badge-pill-light"><span>✓</span> Full 365-Day Warranty</div>
          <div className="badge-pill-light"><span>✓</span> Guaranteed No-Fix, No-Fee</div>
          <div className="badge-pill-light"><span>✓</span> Upfront Transparent Billing</div>
        </div>
      </section>

      <section className="brands-banner">
        <h2>Brands We Service</h2>
        <div className="brands-list">
          <span>Samsung</span>
          <span>LG</span>
          <span>Sony</span>
          <span>Mi</span>
          <span>OnePlus</span>
          <span>Panasonic</span>
          <span>Philips</span>
          <span>TCL</span>
          <span>Hisense</span>
          <span>Vu</span>
        </div>
      </section>
    </>
  );
}
