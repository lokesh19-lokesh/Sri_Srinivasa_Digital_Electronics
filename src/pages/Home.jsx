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

      <section className="content-section">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2>Common TV <span className="text-gradient">Problems We Fix</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>From power failures to display issues — our experienced technicians deliver fast, reliable fixes.</p>
        </div>
        
        <div className="problems-grid">
          <div className="problem-card">
            <h4>⚡ Power Issues</h4>
            <p>TV won't turn on, random shutdowns, power board failures.</p>
          </div>
          <div className="problem-card">
            <h4>🖥️ Display Problems</h4>
            <p>Blank screen, lines on display, color distortion, flickering.</p>
          </div>
          <div className="problem-card">
            <h4>🔊 Sound Issues</h4>
            <p>No audio, distorted sound, speaker replacement needed.</p>
          </div>
          <div className="problem-card">
            <h4>🔌 Connectivity Problems</h4>
            <p>WiFi issues, HDMI not working, Bluetooth pairing fails.</p>
          </div>
          <div className="problem-card">
            <h4>⚙️ Motherboard chip level</h4>
            <p>IC replacement, EEPROM programming, main board component repairs.</p>
          </div>
          <div className="problem-card">
            <h4>💡 Backlight Replacement</h4>
            <p>Dim display, backlight bleeding, LED strip replacement.</p>
          </div>
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
