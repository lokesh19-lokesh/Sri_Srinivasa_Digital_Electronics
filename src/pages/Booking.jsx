import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Confirmed! (UI Only)');
    navigate('/');
  };

  return (
    <>
      <div className="page-hero">
        <h1>Book Your <span className="glow-text" style={{ color: 'var(--accent-blue)' }}>Repair</span></h1>
        <p>Fast, reliable service at your doorstep. Schedule an expert diagnosis today.</p>
      </div>

      <section className="content-section">
        <div style={{ maxWidth: '700px', margin: '0 auto', background: 'var(--bg-secondary)', padding: '40px', borderRadius: '20px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" placeholder="Full Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none' }} required />
                    <input type="tel" placeholder="Phone Number" style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none' }} required />
                </div>

                <select style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none', appearance: 'none', cursor: 'pointer' }} required defaultValue="">
                    <option value="" disabled>Select Device Type</option>
                    <option value="led">LED TV</option>
                    <option value="oled">OLED TV</option>
                    <option value="qled">QLED TV</option>
                    <option value="plasma">Plasma TV</option>
                    <option value="audio">Home Theater / Audio</option>
                </select>

                <textarea placeholder="Describe the issue (e.g. No display, distorted sound, etc.)" rows="4" style={{ padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff', width: '100%', outline: 'none', resize: 'none' }} required></textarea>
                
                <button type="submit" className="btn-cta" style={{ border: 'none', cursor: 'pointer', padding: '18px', fontSize: '1.1rem', marginTop: '10px' }}>Confirm Booking Request</button>
            </form>
        </div>
      </section>
    </>
  );
}
