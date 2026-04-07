import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    brand: '', issue: '', address: '',
    date: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your inspection slot is reserved! Our team will contact you momentarily to confirm timings.');
  };

  return (
    <>
      <div className="page-hero" style={{ minHeight: '30vh', padding: '120px 5% 40px' }}>
        <h1>Schedule a <span className="text-gradient">Repair</span></h1>
        <p>Expert Doorstep Inspection & Professional Diagnosis.</p>
      </div>

      <section className="booking-section">
        <div className="booking-container">
          
          <div className="booking-sidebar">
            <h3 className="glow-text">Why Book With Us?</h3>
            <ul className="service-checklist" style={{ marginTop: '20px', gap: '20px' }}>
              <li>
                <div style={{ fontSize: '1.5rem', marginRight: '15px' }}>🚀</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Same-Day Doorstep Visit</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>We reach you within hours</p>
                </div>
              </li>
              <li>
                <div style={{ fontSize: '1.5rem', marginRight: '15px' }}>🛠️</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Original Spare Parts</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>100% genuine guaranteed</p>
                </div>
              </li>
              <li>
                <div style={{ fontSize: '1.5rem', marginRight: '15px' }}>🛡️</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>365 Days Warranty</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>On all replaced parts</p>
                </div>
              </li>
              <li>
                <div style={{ fontSize: '1.5rem', marginRight: '15px' }}>💳</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Transparent Pricing</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Upfront quote after diagnostic</p>
                </div>
              </li>
            </ul>
            
          </div>

          <div className="contact-form-wrapper" style={{ flex: 1, padding: '40px' }}>
            <h2 style={{ marginBottom: '5px' }}>Service Request Form</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Fill in your details and we will dispatch a technician to your location.</p>
            
            <form className="premium-form booking-form" onSubmit={handleSubmit}>
              
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label>Mobile Number</label>
                  <input type="tel" name="phone" placeholder="+91 99999 99999" onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>TV Brand</label>
                  <select name="brand" onChange={handleChange} required>
                    <option value="" disabled selected>Select TV Brand</option>
                    <option value="Samsung">Samsung</option>
                    <option value="LG">LG</option>
                    <option value="Sony">Sony</option>
                    <option value="Mi">Mi / Xiaomi</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="TCL">TCL</option>
                    <option value="Other">Other Brand</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Main Problem</label>
                  <select name="issue" onChange={handleChange} required>
                    <option value="" disabled selected>What's wrong?</option>
                    <option value="Display Broken/Lines">Screen Lines / Broken</option>
                    <option value="No Power">Won't Turn On (No Power)</option>
                    <option value="No Picture but Sound">No Picture, Has Sound</option>
                    <option value="No Sound">No Sound</option>
                    <option value="Software Issue">Software / WiFi Issue</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Complete Address (Hyderabad area)</label>
                <textarea name="address" placeholder="Flat No, Building, Street, Landmark, Pincode" rows="3" onChange={handleChange} required></textarea>
              </div>

              <div className="input-group">
                <label>Preferred Date</label>
                <input type="date" name="date" onChange={handleChange} required style={{ colorScheme: 'dark' }} />
              </div>

              <button type="submit" className="btn-cta submit-btn" style={{ marginTop: '20px' }}>Confirm Booking Request</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
