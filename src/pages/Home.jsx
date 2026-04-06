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
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set fixed resolution
    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 240;
    const currentFrame = index => 
      `/assets/frames/frame-${(index + 1).toString().padStart(3, '0')}.webp`;

    const images = [];
    const frameInfo = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[frameInfo.frame];
      if (!img) return;
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      context.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    images[0].onload = render;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    });

    tl.to(frameInfo, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render
    }, 0);

    // Set step-1 to be initially visible at top
    gsap.set("#step-1", { opacity: 1, y: 0 });
    
    // Text Overlay Animations using component refs or IDs
    gsap.to("#step-1", {
        opacity: 0, y: -50,
        scrollTrigger: { trigger: container.current, start: "+=10%", end: "+=20%", scrub: true }
    });

    gsap.fromTo("#step-2", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, scrollTrigger: { trigger: container.current, start: "+=15%", end: "+=25%", scrub: true } }
    );
    gsap.to("#step-2", {
        opacity: 0, y: -50, scrollTrigger: { trigger: container.current, start: "+=35%", end: "+=45%", scrub: true }
    });

    gsap.fromTo("#step-3", 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, scrollTrigger: { trigger: container.current, start: "+=40%", end: "+=50%", scrub: true } }
    );
    gsap.to("#step-3", {
        opacity: 0, x: 50, scrollTrigger: { trigger: container.current, start: "+=60%", end: "+=70%", scrub: true }
    });

    gsap.fromTo("#step-4", 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, scrollTrigger: { trigger: container.current, start: "+=65%", end: "+=75%", scrub: true } }
    );
    gsap.to("#step-4", {
        opacity: 0, scale: 1.1, scrollTrigger: { trigger: container.current, start: "+=80%", end: "+=85%", scrub: true }
    });

    gsap.fromTo("#step-5", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, scrollTrigger: { trigger: container.current, start: "+=85%", end: "+=95%", scrub: true } }
    );
    
    // Cleanup to prevent overlapping instances on remounting
    return () => {
      ScrollTrigger.killAll();
    };
  }, { scope: container });

  return (
    <>
      <div className="canvas-container" ref={container}>
        <div className="sticky-wrapper">
          <canvas id="hero-lightpass" ref={canvasRef}></canvas>
          <div className="canvas-overlay"></div>
          
          <div className="story-sections">
            <div className="story-step step-center" id="step-1">
              <h2 className="text-gradient">Professional TV Repair</h2>
              <p className="glow-text">Fast. Reliable. Affordable.</p>
              <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>We fix all LED, OLED, Smart TVs at your doorstep</p>
            </div>

            <div className="story-step step-left" id="step-2">
              <h2 className="text-gradient">Advanced Diagnostics</h2>
              <p>We identify issues at component level</p>
              <p>with precision engineering tools.</p>
            </div>

            <div className="story-step step-right" id="step-3">
              <h2 className="text-gradient">Expert Repair Service</h2>
              <ul style={{ listStyle: 'none', fontSize: '1.2rem', color: 'var(--text-secondary)', textShadow: '0 2px 15px rgba(0,0,0,1), 0 1px 5px rgba(0,0,0,1)' }}>
                <li>✓ Screen Replacement</li>
                <li>✓ Motherboard Repair</li>
                <li>✓ Power Issue Resolution</li>
                <li>✓ Audio Optimization</li>
              </ul>
            </div>

            <div className="story-step step-center" id="step-4">
              <h2 className="glow-text" style={{ color: 'var(--accent-cyan)' }}>Precision Repair Process</h2>
              <p>Every part is tested, repaired, and optimized.</p>
            </div>

            <div className="story-step step-center" id="step-5">
              <h2 className="text-gradient">Your TV. Like New Again.</h2>
              <p>Experience the ultimate restoration.</p>
              <Link to="/booking" className="btn-cta" style={{ marginTop: '30px', display: 'inline-block', pointerEvents: 'auto' }}>
                Book Your Repair Now
              </Link>
            </div>
          </div>
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
