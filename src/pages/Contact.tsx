import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Instagram, Youtube, Facebook, Sparkles } from 'lucide-react';

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

const faqs = [
  { q: 'How many sessions do I need?', a: 'It depends on the complexity and number of songs. Typically 6-12 sessions are sufficient. We assess during the free consultation.' },
  { q: 'Can you choreograph for absolute beginners?', a: 'Absolutely! Most of our clients are first-time dancers. We design routines specifically for your comfort level.' },
  { q: 'Do you travel to our home?', a: 'Yes! We offer doorstep service across Delhi NCR including Delhi, Gurgaon, Noida, Faridabad, Greater Noida, and Ghaziabad.' },
  { q: 'Can you choreograph to any song?', a: 'Yes, we work with any song - Bollywood, Western, Classical, or even custom mashups.' },
  { q: 'What if I need to reschedule?', a: 'You can reschedule with 24 hours notice at no extra charge.' },
  { q: 'Do you offer group choreography?', a: 'Yes! We specialize in coordinating large group dances with up to 20+ people.' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: 12,
  border: '1px solid #e5e7eb', outline: 'none', fontSize: 14,
  transition: 'border-color 0.3s', background: 'white',
};

export default function Contact() {
  const pageRef = useReveal();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', location: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section style={{minHeight: "80vh",
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a2e",
          position: "relative",
          overflow: "hidden",
          padding: "80px 20px",}}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: `radial-gradient(circle at 30% 40%, #daa520 0%, transparent 40%), radial-gradient(circle at 70% 60%, #4b0032 0%, transparent 40%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <p className="font-script" style={{ color: '#daa520', fontSize: 24, marginBottom: 12 }}>Get in Touch</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Contact & Booking</h1>
          <p style={{ color: '#9ca3af', maxWidth: 640, margin: '0 auto', fontSize: 18 }}>Ready to create your dream wedding performance? Reach out for a free consultation!</p>
        </div>
      </section>

      {/* 3-Step */}
      <section style={{  padding: 'clamp(20px, 8vw, 80px)', background: 'linear-gradient(to right, #fdf8ef, white)', borderBottom: '1px solid rgba(218,165,32,0.1)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { step: '1', title: 'Inquire', desc: 'Fill the form or call us' },
            { step: '2', title: 'Consult', desc: 'Free consultation session' },
            { step: '3', title: 'Dance!', desc: 'Start your training' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, margin: '0 auto 12px', borderRadius: '50%', background: 'linear-gradient(135deg, #daa520, #b8860b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontWeight: 700, fontSize: 20, boxShadow: '0 8px 25px rgba(218,165,32,0.3)' }}>{s.step}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e', fontSize: 18 }}>{s.title}</h3>
              <p style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{  padding: 'clamp(20px, 8vw, 80px)', background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
            {/* Form */}
            <div className="reveal">
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>Send Us a Message</h2>
              <p style={{ color: '#6b7280', marginBottom: 32 }}>Fill in your details and we will get back within 2 hours.</p>

              {submitted ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: 32, textAlign: 'center' }}>
                  <CheckCircle size={48} style={{ color: '#22c55e', margin: '0 auto 16px', display: 'block' }} />
                  <h3 style={{ fontSize: 20, fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#15803d', marginBottom: 8 }}>Thank You!</h3>
                  <p style={{ color: '#16a34a' }}>Sarthak will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Full Name *</label>
                      <input type="text" required value={formData.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Phone Number *</label>
                      <input type="tel" required value={formData.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Email Address</label>
                    <input type="email" value={formData.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Service Required *</label>
                      <select required value={formData.service} onChange={e => update('service', e.target.value)} style={inputStyle}>
                        <option value="">Select service...</option>
                        <option value="solo">Solo Dance Choreography</option>
                        <option value="couple">Couple Dance Choreography</option>
                        <option value="group">Group Dance Choreography</option>
                        <option value="bride-groom">Bride & Groom Dance</option>
                        <option value="online">Online Sessions</option>
                        <option value="recorded">Recorded Sessions</option>
                        <option value="home">Offline Home Sessions</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Location *</label>
                      <select required value={formData.location} onChange={e => update('location', e.target.value)} style={inputStyle}>
                        <option value="">Select area...</option>
                        <option value="delhi">Delhi</option>
                        <option value="gurgaon">Gurgaon</option>
                        <option value="noida">Noida</option>
                        <option value="faridabad">Faridabad</option>
                        <option value="greater-noida">Greater Noida</option>
                        <option value="ghaziabad">Ghaziabad</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Event Date</label>
                    <input type="date" value={formData.date} onChange={e => update('date', e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Message</label>
                    <textarea rows={4} value={formData.message} onChange={e => update('message', e.target.value)} placeholder="Tell us about your wedding, songs, number of dancers, etc." style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                  <button type="submit" style={{
                    padding: '16px 40px', background: 'linear-gradient(to right, #daa520, #b8860b)',
                    color: '#1a1a2e', borderRadius: 9999, fontWeight: 700, fontSize: 18,
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: 8, transition: 'all 0.3s',
                  }}>
                    <Send size={18} /> Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #2a1a3e)', borderRadius: 24, padding: 20, color: 'white', marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Direct Contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { icon: Phone, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+9179066 78752', bg: 'rgba(218,165,32,0.1)', border: 'rgba(218,165,32,0.2)', iconColor: '#daa520' },
                    { icon: MessageCircle, label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/9179066 78752', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.2)', iconColor: '#4ade80' },
                    { icon: Mail, label: 'Email', value: 'info@spdancecompany.com', href: 'mailto:info@spdancecompany.com', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', iconColor: '#60a5fa' },
                  ].map(({ icon: Icon, label, value, href, bg, border, iconColor }) => (
                    <a key={label} href={href} target={label === 'WhatsApp' ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${border}`, flexShrink: 0 }}>
                        <Icon size={20} style={{ color: iconColor }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 14, color: '#9ca3af', margin: 0 }}>{label}</p>
                        <p style={{ fontWeight: 500, margin: 0 }}>{value}</p>
                      </div>
                    </a>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(168,85,247,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(168,85,247,0.2)', flexShrink: 0 }}>
                      <MapPin size={20} style={{ color: '#c084fc' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 14, color: '#9ca3af', margin: 0 }}>Service Area</p>
                      <p style={{ fontWeight: 500, margin: 0 }}>Delhi NCR Region</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(245,158,11,0.2)', flexShrink: 0 }}>
                      <Clock size={20} style={{ color: '#fbbf24' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 14, color: '#9ca3af', margin: 0 }}>Available</p>
                      <p style={{ fontWeight: 500, margin: 0 }}>Mon-Sun, 8 AM - 9 PM</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 12 }}>Follow Us</p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    {[Instagram, Youtube, Facebook].map((Icon, i) => (
                      <a key={i} href="https://www.instagram.com/sarthak_diwaker/" style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', textDecoration: 'none', transition: 'all 0.3s' }}>
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/9179066 78752?text=Hi%20Sarthak!%20I%20am%20interested%20in%20wedding%20dance%20choreography." target="_blank" rel="noopener noreferrer" style={{
                display: 'block', background: '#25D366', borderRadius: 16, padding: 24,
                color: 'white', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s',
              }}>
                <MessageCircle size={32} style={{ margin: '0 auto 12px', display: 'block' }} />
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Quick WhatsApp Chat</h3>
                <p style={{ color: '#bbf7d0', fontSize: 14, margin: 0 }}>Tap to start a conversation instantly</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(60px, 8vw, 80px) 0', background: '#faf9f6' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>Common Questions</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>FAQ</h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0' }}><Sparkles size={14} style={{ color: '#daa520' }} /></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="reveal" style={{ background: 'white', borderRadius: 12, border: '1px solid #f3f4f6', overflow: 'hidden', transitionDelay: `${i * 0.05}s` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: '100%', textAlign: 'left', padding: '16px 24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  background: 'none', border: 'none', cursor: 'pointer',
                }}>
                  <span style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 15 }}>{faq.q}</span>
                  <span style={{ color: '#daa520', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', fontSize: 20, flexShrink: 0 }}>+</span>
                </button>
                <div style={{ overflow: 'hidden', transition: 'max-height 0.3s ease, padding 0.3s', maxHeight: openFaq === i ? 160 : 0, paddingBottom: openFaq === i ? 16 : 0 }}>
                  <p style={{ padding: '0 24px', color: '#6b7280', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 80px) 0', background: 'linear-gradient(135deg, #4b0032, #1a1a2e)' }}>
        <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <p className="font-script" style={{ color: '#daa520', fontSize: 24, marginBottom: 16 }}>Your Dream Awaits</p>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 48px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 24, lineHeight: 1.2 }}>
            Every Great Performance Starts with a <span className="gold-shimmer">Single Step</span>
          </h2>
          <p style={{ color: '#d1d5db', fontSize: 18, marginBottom: 32 }}>Take yours today. Book a free consultation with Sarthak Diwakar.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="tel:+9179066 78752" style={{
              padding: '16px 40px', background: 'linear-gradient(to right, #daa520, #b8860b)',
              color: '#1a1a2e', borderRadius: 9999, fontWeight: 700, fontSize: 18,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Phone size={18} /> Call Now
            </a>
            <a href="https://wa.me/9179066 78752" target="_blank" rel="noopener noreferrer" style={{
              padding: '16px 40px', background: '#25D366', color: 'white',
              borderRadius: 9999, fontWeight: 700, fontSize: 18,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
