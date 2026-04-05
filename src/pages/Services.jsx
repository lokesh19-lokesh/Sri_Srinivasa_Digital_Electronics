export default function Services() {
  return (
    <>
      <div className="page-hero">
        <h1>Our <span className="text-gradient">Services</span></h1>
        <p>Expert TV repair services for LED, LCD, Plasma, and Smart TVs, ensuring quick, reliable, and affordable solutions for all.</p>
      </div>

      <section className="content-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', marginBottom: '20px' }}>LED and LCD TV Screen Repair</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Expert solutions for cracked, damaged, or malfunctioning LED and LCD TV screens to restore optimal viewing quality.</p>
            </div>
            
            <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.5rem', marginBottom: '20px' }}>Smart TV Software and Hardware Repair</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Comprehensive services for resolving software glitches, connectivity issues, and hardware malfunctions in Smart TVs.</p>
            </div>
            
            <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '20px' }}>Power Supply & Circuit Board Repair</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Efficient diagnosis and repair of power supply issues, circuit board failures, and other electrical problems to ensure uninterrupted entertainment.</p>
            </div>
        </div>
      </section>
    </>
  );
}
