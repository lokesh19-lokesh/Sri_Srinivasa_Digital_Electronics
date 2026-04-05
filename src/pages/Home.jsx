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

    // Text Overlay Animations using component refs or IDs
    gsap.to("#step-1", {
        opacity: 1, duration: 0.1, y: 0,
        scrollTrigger: { trigger: container.current, start: "top top", end: "+=15%", scrub: true }
    });
    gsap.to("#step-1", {
        opacity: 0, y: -50,
        scrollTrigger: { trigger: container.current, start: "+=15%", end: "+=20%", scrub: true }
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
    <div className="canvas-container" ref={container}>
      <div className="sticky-wrapper">
        <canvas id="hero-lightpass" ref={canvasRef}></canvas>
        
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
            <ul style={{ listStyle: 'none', fontSize: '1.2rem', color: 'var(--text-secondary)', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
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
  );
}
