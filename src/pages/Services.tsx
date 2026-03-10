import { Link } from 'react-router-dom';
import { Heart, Users, User, Crown, Monitor, Video, Home, MapPin, Calendar, Sparkles, CheckCircle, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const choreographyTypes = [
  { icon: User, title: 'Solo Dance Choreography', desc: 'Stunning solo performances designed for brides, grooms, or any family member who wants to steal the spotlight.', features: ['Customized to your song', 'Beginner-friendly steps', 'Stage presence coaching', 'Video recording of routine'], color: '#0d9488' },
  { icon: Users, title: 'Group Dance Choreography', desc: 'High-energy group performances for sangeet, mehndi, and reception. We coordinate formations and transitions.', features: ['Up to 20+ dancers', 'Formation design', 'Mixed skill levels', 'Costume suggestions'], color: '#7c3aed' },
  { icon: Heart, title: 'Couple Dance Choreography', desc: 'Romantic couple choreography that tells your love story through dance. From waltzes to Bollywood mashups.', features: ['Romantic lift sequences', 'Song mixing available', 'Chemistry-building sessions', 'Surprise planning'], color: '#e11d48' },
  { icon: Crown, title: 'Bride & Groom Dance', desc: 'The most special dance — your first dance as a married couple. Picture-perfect and memorable.', features: ['First dance specialist', 'Emotional choreography', 'Reception-ready routines', 'Practice planning'], color: '#d97706' },
];

const sessionTypes = [
  { icon: Monitor, title: 'Online Sessions', subtitle: 'Live Interactive Classes', desc: 'Learn from anywhere with live video sessions. Perfect for busy professionals or out-of-town clients.', features: ['Live 1-on-1 video calls', 'Screen recording provided', 'Flexible scheduling', 'Available pan-India'], price: 'From Rs. 1,500/session' },
  { icon: Video, title: 'Recorded Sessions', subtitle: 'Step-by-Step Videos', desc: 'Pre-recorded tutorial videos broken down step-by-step. Practice at your own pace.', features: ['HD quality videos', 'Slow-motion breakdowns', 'Lifetime access', 'Practice tracks included'], price: 'From Rs. 3,000/package' },
  { icon: Home, title: 'Offline Home Sessions', subtitle: 'Personal Home Training', desc: 'Sarthak comes to your doorstep anywhere in Delhi NCR. Personalized attention in your own space.', features: ['Door-to-door service', 'Delhi NCR coverage', 'Equipment provided', 'Family can watch'], price: 'From Rs. 2,500/session' },
];

const packages = [
  { name: 'Basic', price: '8,000', sessions: '4 Sessions', features: ['1 Song choreography', 'Online or offline', 'Basic formations', 'Video recording'], popular: false },
  { name: 'Premium', price: '15,000', sessions: '8 Sessions', features: ['2 Song choreography', 'Home sessions', 'Advanced formations', 'Song mixing', 'Costume guidance', 'Priority scheduling'], popular: true },
  { name: 'Royal', price: '25,000', sessions: '12 Sessions', features: ['3+ Song choreography', 'Unlimited home visits', 'Full event coordination', 'Rehearsal planning', 'Day-of support', 'Group management'], popular: false },
];

export default function Services() {
  const ref = useReveal();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div ref={ref}>
      {/* Hero */}
      <section style={{minHeight: "80vh",
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a2e",
          position: "relative",
          overflow: "hidden",
          padding: "80px 20px",}}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: `radial-gradient(circle at 30% 60%, #4b0032 0%, transparent 50%), radial-gradient(circle at 70% 30%, #daa520 0%, transparent 40%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <p className="font-script" style={{ color: '#daa520', fontSize: 24, marginBottom: 12 }}>Our Services</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Dance Services Tailored for You</h1>
          <p style={{ color: '#9ca3af', maxWidth: 640, margin: '0 auto', fontSize: 18 }}>From intimate couple dances to grand group performances, we offer comprehensive wedding choreography services across Delhi NCR.</p>
        </div>
      </section>

      {/* Choreography Types */}
      <section style={{ padding: 'clamp(10px, 8vw, 150px)', background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>Choreography Types</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>Choose Your Dance Style</h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0' }}><Sparkles size={14} style={{ color: '#daa520' }} /></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', 
            gap: 32 
          }}>
            {choreographyTypes.map((s, i) => (
              <div key={i} className="reveal card-glow" style={{ 
                borderRadius: 20, 
                border: '1px solid #f3f4f6', 
                overflow: 'hidden', 
                transitionDelay: `${i * 0.1}s`,
                background: 'white',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ height: 6, background: s.color }} />
                <div style={{ padding: 'clamp(24px, 5vw, 40px)', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  
                  {/* Centered Icon Box */}
                  <div style={{ 
                    width: 70, 
                    height: 70, 
                    borderRadius: 20, 
                    background: s.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: `0 12px 24px ${s.color}40`, 
                    marginBottom: 24 
                  }}>
                    <s.icon size={32} style={{ color: 'white' }} />
                  </div>

                  {/* Text Content */}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: '#1a1a2e', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
                  
                  {/* Features List - Adjusted for alignment */}
                  <div style={{ 
                    width: '100%',
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                    gap: 12,
                    marginTop: 'auto',
                    paddingTop: 20,
                    borderTop: '1px solid #f9fafb'
                  }}>
                    {s.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#4b5563', justifyContent: 'center' }}>
                        <CheckCircle size={14} style={{ color: '#daa520', flexShrink: 0 }} /> 
                        <span style={{ fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section style={{ padding: 'clamp(10px, 8vw, 150px)', background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>Session Options</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>How Would You Like to Learn?</h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0' }}><Sparkles size={14} style={{ color: '#daa520' }} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {sessionTypes.map((s, i) => (
              <div key={i} className="reveal card-glow" style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid #f3f4f6', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{ width: 64, height: 64, margin: '0 auto 20px', borderRadius: 16, background: 'linear-gradient(135deg, rgba(218,165,32,0.1), rgba(218,165,32,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(218,165,32,0.2)' }}>
                  <s.icon size={28} style={{ color: '#daa520' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: '#1a1a2e', margin: 0 }}>{s.title}</h3>
                <p style={{ color: '#daa520', fontSize: 14, fontWeight: 500, marginBottom: 12 }}>{s.subtitle}</p>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', textAlign: 'left' }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#4b5563', marginBottom: 8 }}>
                      <CheckCircle size={14} style={{ color: '#daa520', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <p style={{ color: '#1a1a2e', fontWeight: 700, fontSize: 18, margin: 0 }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section style={{ padding: 'clamp(10px, 8vw, 150px)', background: '#1a1a2e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>Packages</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', letterSpacing: '0.02em' }}>
              Choreography Collections
            </h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
              <div style={{ height: '1px', width: '40px', background: 'rgba(218,165,32,0.3)' }} />
              <Sparkles size={14} style={{ color: '#daa520' }} />
              <div style={{ height: '1px', width: '40px', background: 'rgba(218,165,32,0.3)' }} />
            </div>
          </div>

          {/* Responsive Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px', 
            maxWidth: '1100px', 
            margin: '0 auto',
            alignItems: 'stretch'
          }}>
            {packages.map((p, i) => (
              <div 
                key={p.name} 
                className="reveal group" 
                style={{ 
                  borderRadius: 24, 
                  overflow: 'hidden', 
                  background: '#241a35', 
                  border: p.popular ? '2px solid #daa520' : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: p.popular ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Most Popular Badge */}
                {p.popular && (
                  <div style={{ 
                    background: 'linear-gradient(to right, #daa520, #b8860b)', 
                    textAlign: 'center', 
                    padding: '10px 0', 
                    color: '#1a1a2e', 
                    fontSize: 12, 
                    fontWeight: 800, 
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: 6 
                  }}>
                    <Star size={12} fill="#1a1a2e" /> Highly Recommended
                  </div>
                )}

                <div style={{ padding: '40px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'white', marginBottom: 8 }}>
                    {p.name}
                  </h3>
                  
                  <p style={{ 
                    color: '#daa520', 
                    fontSize: 13, 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    marginBottom: 20 
                  }}>
                    {p.sessions}
                  </p>

                  <div style={{ height: '1px', width: '100%', background: 'rgba(255,255,255,0.05)', marginBottom: 24 }} />

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', flex: 1 }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: '#d1d5db', fontSize: 15, marginBottom: 16, lineHeight: 1.4 }}>
                        <CheckCircle size={16} style={{ color: '#daa520', flexShrink: 0, marginTop: 2 }} /> 
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" style={{
                    display: 'block', 
                    textAlign: 'center', 
                    padding: '16px 0', 
                    borderRadius: 16, 
                    fontWeight: 800, 
                    fontSize: 14,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textDecoration: 'none', 
                    transition: 'all 0.3s',
                    background: p.popular ? 'linear-gradient(to right, #daa520, #b8860b)' : 'transparent',
                    color: p.popular ? '#1a1a2e' : '#daa520',
                    border: p.popular ? 'none' : '1px solid rgba(218,165,32,0.5)',
                    boxShadow: p.popular ? '0 10px 20px rgba(218,165,32,0.2)' : 'none'
                  }}>
                    Inquire for {p.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section style={{ padding: 'clamp(10px, 8vw, 150px)', background: '#faf9f6' }}>
        <div style={{ maxWidth: 650, margin: '0 auto', padding: '0 16px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 22, marginBottom: 8 }}>Quick Booking</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>Start Your Dance Journey</h2>
            <p style={{ color: '#6b7280', marginTop: 12, fontSize: 16 }}>Fill in the details below to schedule your consultation.</p>
          </div>

          <div className="reveal" style={{ 
            background: 'white', 
            borderRadius: 32, 
            padding: 'clamp(30px, 5vw, 60px)', 
            border: '1px solid rgba(218,165,32,0.1)', 
            boxShadow: '0 30px 70px rgba(26,26,46,0.06)' 
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              
              {/* Date Input Group */}
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
                  <Calendar size={16} style={{ color: '#daa520' }} /> Appointment Date
                </label>
                <input
                  type="date" 
                  value={selectedDate} 
                  onChange={e => setSelectedDate(e.target.value)} 
                  style={{ 
                    width: '100%', 
                    padding: '14px 18px', 
                    borderRadius: 14, 
                    border: '2px solid #f3f4f6', 
                    outline: 'none', 
                    fontSize: 15,
                    color: '#1a1a2e',
                    background: '#f9fafb',
                    transition: 'all 0.3s ease',
                  }} 
                  onFocus={(e) => { e.target.style.borderColor = '#daa520'; e.target.style.background = 'white'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#f3f4f6'; e.target.style.background = '#f9fafb'; }}
                />
              </div>

              {/* Package Selection Group */}
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
                  <Star size={16} style={{ color: '#daa520' }} /> Choreography Package
                </label>
                <div style={{ position: 'relative' }}>
                  <select 
                    value={selectedPackage} 
                    onChange={e => setSelectedPackage(e.target.value)} 
                    style={{ 
                      width: '100%', 
                      padding: '14px 18px', 
                      borderRadius: 14, 
                      border: '2px solid #f3f4f6', 
                      outline: 'none', 
                      fontSize: 15, 
                      color: '#1a1a2e',
                      background: '#f9fafb', 
                      cursor: 'pointer',
                      appearance: 'none',
                      transition: 'all 0.3s ease'
                    }} 
                    onFocus={(e) => { e.target.style.borderColor = '#daa520'; e.target.style.background = 'white'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#f3f4f6'; e.target.style.background = '#f9fafb'; }}
                  >
                    <option value="">Select your preferred package...</option>
                    <option value="basic">Basic - Rs. 8,000</option>
                    <option value="premium">Premium - Rs. 15,000</option>
                    <option value="royal">Royal - Rs. 25,000</option>
                  </select>
                  <div style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>▼</div>
                </div>
              </div>

              {/* Location Group */}
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
                  <MapPin size={16} style={{ color: '#daa520' }} /> Training Location
                </label>
                <div style={{ position: 'relative' }}>
                  <select 
                    value={selectedLocation} 
                    onChange={e => setSelectedLocation(e.target.value)} 
                    style={{ 
                      width: '100%', 
                      padding: '14px 18px', 
                      borderRadius: 14, 
                      border: '2px solid #f3f4f6', 
                      outline: 'none', 
                      fontSize: 15, 
                      color: '#1a1a2e',
                      background: '#f9fafb',
                      cursor: 'pointer',
                      appearance: 'none',
                      transition: 'all 0.3s ease'
                    }} 
                    onFocus={(e) => { e.target.style.borderColor = '#daa520'; e.target.style.background = 'white'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#f3f4f6'; e.target.style.background = '#f9fafb'; }}
                  >
                    <option value="">Choose your city...</option>
                    <option value="delhi">Delhi Central/NCR</option>
                    <option value="gurgaon">Gurgaon (Gurugram)</option>
                    <option value="noida">Noida</option>
                    <option value="faridabad">Faridabad</option>
                    <option value="greater-noida">Greater Noida</option>
                    <option value="ghaziabad">Ghaziabad</option>
                  </select>
                  <div style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>▼</div>
                </div>
              </div>

              {/* Submit Button */}
              <button style={{ 
                width: '100%', 
                marginTop: 10,
                padding: '18px 0', 
                background: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%)', 
                color: '#daa520', 
                borderRadius: 16, 
                fontWeight: 700, 
                fontSize: 16, 
                border: '1px solid #daa520', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 20px rgba(26,26,46,0.15)'
              }}>
                Inquire Now
              </button>

              <p style={{ textAlign: 'center', fontSize: 12, color: '#9ca3af', margin: 0 }}>
                No payment required upfront. We will contact you to discuss details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
