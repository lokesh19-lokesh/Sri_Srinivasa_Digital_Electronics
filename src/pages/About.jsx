export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>About <span className="text-gradient">Sri Srinivasa Digital Electronics</span></h1>
        <p>Your Trusted TV Care Experts!</p>
      </div>

      <section className="content-section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '20px' }}>
              Sri Srinivasa Digital Electronics is your trusted destination for expert repair of LED, LCD, and Smart TVs.
            </p>
            <p>
              With skilled technicians and advanced tools, we deliver reliable, affordable, and quick solutions to bring your entertainment back to life. Customer satisfaction and quality service are always our top priorities.
            </p>
            <p style={{ marginTop: '30px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
              Expert TV Repair Services, Delivering Quality and Convenience Right to Your Doorstep.
            </p>
        </div>
      </section>
    </>
  );
}
