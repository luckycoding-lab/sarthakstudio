import { Link } from 'react-router-dom';
import { Award, Users, Heart, Star, Music, MapPin, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

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

export default function About() {
  const ref = useReveal();

  const journey = [
    { year: '2016', title: 'Dance Journey Begins', desc: 'Sarthak starts training in classical and contemporary dance forms.' },
    { year: '2018', title: 'Studio Sarthak Founded', desc: 'Launched with a vision to make wedding choreography accessible to all.' },
    { year: '2019', title: 'First 100 Weddings', desc: 'Reached the milestone of choreographing 100 wedding performances.' },
    { year: '2021', title: 'Online Sessions Launched', desc: 'Expanded to virtual training during the pandemic, reaching clients nationwide.' },
    { year: '2023', title: 'Delhi NCR Expansion', desc: 'Now serving all major cities across the Delhi NCR region.' },
    { year: '2024', title: '500+ Weddings Milestone', desc: 'Over 500 successful wedding choreographies and counting.' },
  ];

  const qualities = [
    { icon: Heart, title: 'Passionate Teacher', desc: 'Sarthak brings infectious energy to every session, making learning enjoyable.' },
    { icon: Music, title: 'Multi-Style Expert', desc: 'Trained in Bollywood, Classical, Contemporary, Hip-Hop, and Western dance forms.' },
    { icon: Users, title: 'Patient Mentor', desc: 'Works at your pace, ensuring comfort and confidence in every step.' },
    { icon: Star, title: 'Creative Visionary', desc: 'Each choreography is uniquely crafted to match your personality and song.' },
    { icon: Clock, title: 'Flexible & Reliable', desc: 'Adapts to your schedule with punctual, professional service every time.' },
    { icon: MapPin, title: 'Doorstep Service', desc: 'Travels across Delhi NCR to train at your home or chosen venue.' },
  ];

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
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: `radial-gradient(circle at 20% 50%, #4b0032 0%, transparent 50%), radial-gradient(circle at 80% 30%, #008080 0%, transparent 40%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
          <div className="fade-in-up" style={{ textAlign: 'center' }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 24, marginBottom: 12 }}>Meet Your Choreographer</p>
            <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Sarthak Diwakar</h1>
            <p style={{ color: '#9ca3af', maxWidth: 640, margin: '0 auto', fontSize: 18 }}>Founder of Studio Sarthak, passionate dance teacher, and the creative force behind 500+ unforgettable wedding performances.</p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section style={{ padding: 'clamp(60px, 8vw, 150px)', background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div className="reveal">
              <div style={{ position: 'relative', maxWidth: 420, margin: '0 auto' }}>
                <div style={{ aspectRatio: '3/4', borderRadius: 24, background: 'linear-gradient(135deg, #1a1a2e, #2a1a3e)', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: 160, height: 160, margin: '0 auto', borderRadius: '50%', background: 'linear-gradient(135deg, #daa520, #b8860b)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 15px 50px rgba(184,134,11,0.4)' }}>
                        <span style={{ color: '#1a1a2e', fontSize: 60, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>SD</span>
                      </div>
                      <h3 style={{ color: 'white', fontSize: 22, fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 0 }}>Sarthak Diwakar</h3>
                      <p style={{ color: '#daa520', marginTop: 4 }}>Dance Teacher & Choreographer</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, marginTop: 12 }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} style={{ color: '#daa520', fill: '#daa520' }} />)}
                      </div>
                      <p style={{ color: '#9ca3af', fontSize: 14, marginTop: 8 }}>4.9/5 from 200+ Reviews</p>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: 16, left: 16, width: 80, height: 80, borderTop: '2px solid rgba(218,165,32,0.3)', borderLeft: '2px solid rgba(218,165,32,0.3)', borderRadius: '16px 0 0 0' }} />
                  <div style={{ position: 'absolute', bottom: 16, right: 16, width: 80, height: 80, borderBottom: '2px solid rgba(218,165,32,0.3)', borderRight: '2px solid rgba(218,165,32,0.3)', borderRadius: '0 0 16px 0' }} />
                </div>
                <div style={{ position: 'absolute', bottom: -24, left: -16, background: 'white', borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.1)', padding: '16px 20px', border: '1px solid rgba(218,165,32,0.1)' }}>
                  <p className="gold-shimmer" style={{ fontSize: 28, fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 0 }}>8+</p>
                  <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Years Experience</p>
                </div>
                <div style={{ position: 'absolute', top: -16, right: -16, background: '#1a1a2e', borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.2)', padding: '16px 20px', border: '1px solid rgba(218,165,32,0.2)' }}>
                  <p style={{ fontSize: 28, fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#daa520', margin: 0 }}>500+</p>
                  <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>Weddings Done</p>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>My Philosophy</p>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e', marginBottom: 24 }}>
                Every Step Should Tell <span style={{ color: '#4b0032' }}>Your Story</span>
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: 16 }}>Dance is the most beautiful way to express love, and when I choreograph a wedding performance, I do not just teach steps—I help you express the emotions, joy, and celebration that your special day deserves.</p>
              <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: 16 }}>My approach is simple: I understand your vision, assess your comfort level, choose the perfect music, and create a routine that feels natural yet looks spectacular. Specializing in Bollywood, the vibrant heart of Indian celebrations where I blend cinematic drama with modern rhythm for a larger-than-life stage presence, and Hip-Hop, where I infuse high-octane urban grooves and sharp, stylish footwork into your routine, I ensure every performance is unique.</p>
              <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: 24 }}>Having trained across these and Classical, Contemporary, and Western dance forms, I bring a level of versatility that allows me to choreograph any style you dream of, turning your vision into an effortless and professional reality.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['Trained in 5+ dance forms', 'Certified dance instructor', 'Specializes in wedding choreography', 'Patient with beginners', 'Creative song mixing and mashups'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={18} style={{ color: '#daa520', flexShrink: 0 }} />
                    <span style={{ color: '#374151', fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 32px', background: 'linear-gradient(to right, #daa520, #b8860b)', color: '#1a1a2e', borderRadius: 9999, fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}>
                Book a Session <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(60px, 8vw, 150px)', background: '#faf9f6' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>The Journey</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>Our Dance Story</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #daa520, rgba(218,165,32,0.2), transparent)' }} />
            {journey.map((item, i) => (
              <div key={i} className="reveal" style={{ position: 'relative', marginBottom: 48, paddingLeft: 56, transitionDelay: `${i * 0.1}s` }}>
                <div style={{ position: 'absolute', left: 16, top: 4, width: 18, height: 18, borderRadius: '50%', background: '#daa520', border: '4px solid #faf9f6', boxShadow: '0 2px 8px rgba(218,165,32,0.3)', zIndex: 1 }} />
                <span style={{ color: '#daa520', fontWeight: 700, fontSize: 18 }}>{item.year}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: '#1a1a2e', marginTop: 4, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: 'clamp(60px, 8vw, 150px)', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>What Sets Us Apart</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>Why Choose Sarthak</h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0' }}>
              <Sparkles size={14} style={{ color: '#daa520' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {qualities.map((q, i) => (
              <div key={i} className="reveal card-glow" style={{ padding: 24, borderRadius: 16, background: 'linear-gradient(135deg, white, #fdf8ef)', border: '1px solid #f3f4f6', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{ width: 64, height: 64, margin: '0 auto 16px', borderRadius: 16, background: 'linear-gradient(135deg, rgba(218,165,32,0.1), rgba(218,165,32,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(218,165,32,0.2)' }}>
                  <q.icon size={28} style={{ color: '#daa520' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>{q.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 150px)', background: 'linear-gradient(135deg, #1a1a2e, #2a1a3e)' }}>
        <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <Award size={48} style={{ color: '#daa520', margin: '0 auto 24px', display: 'block' }} />
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Ready to Create Your Wedding Dance?</h2>
          <p style={{ color: '#d1d5db', marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>Let Sarthak craft a performance that your guests will remember forever.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: 'linear-gradient(to right, #daa520, #b8860b)', color: '#1a1a2e', borderRadius: 9999, fontWeight: 700, fontSize: 18, textDecoration: 'none', transition: 'all 0.3s' }}>
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
