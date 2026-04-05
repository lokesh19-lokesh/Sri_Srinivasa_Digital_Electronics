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
        <div style={{ marginTop: '20px', display: 'inline-block', padding: '10px 20px', background: 'rgba(0, 214, 255, 0.1)', borderRadius: '30px', border: '1px solid var(--accent-cyan)' }}>
          <p style={{ color: 'var(--text-primary)', margin: 0 }}>
            TV Repairing Services Helpline: <a href="tel:+918008859990" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 'bold' }}>+91 80088 59990</a>
          </p>
        </div>
      </div>

      <section className="content-section">
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none' }} required />
                <input type="email" placeholder="Your Email" style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none' }} required />
                <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none', resize: 'none' }} required></textarea>
                <button type="submit" className="btn-cta" style={{ border: 'none', cursor: 'pointer', padding: '15px', fontSize: '1rem' }}>Send Message</button>
            </form>
        </div>
      </section>
    </>
  );
}
