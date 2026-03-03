import { Link } from 'react-router-dom';
import { Star, Quote, ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';

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

const testimonials = [
  { name: 'Priya & Rahul Sharma', location: 'Delhi', stars: 5, event: 'Sangeet Night', text: 'Sarthak made our sangeet performance absolutely magical! We had zero dance experience but he was so patient and creative. Our couple dance brought tears to everyone\'s eyes.', initials: 'PR', color: '#e11d48' },
  { name: 'Sneha Gupta', location: 'Gurgaon', stars: 5, event: 'Bride Solo', text: 'I was terrified of dancing in front of 500 guests. Sarthak not only taught me beautiful choreography but gave me the confidence to perform. My solo was the highlight!', initials: 'SG', color: '#7c3aed' },
  { name: 'The Kapoor Family', location: 'Noida', stars: 5, event: 'Family Group Dance', text: 'Coordinating 20 family members of all ages seemed impossible. But Sarthak managed everyone beautifully. From 8-year-olds to grandparents, everyone danced perfectly!', initials: 'KF', color: '#0d9488' },
  { name: 'Arun & Meera Joshi', location: 'Faridabad', stars: 5, event: 'Couple First Dance', text: 'Our first dance was a dream come true. Sarthak mixed three songs perfectly and created a routine that told our 5-year love story. Still getting compliments!', initials: 'AJ', color: '#d97706' },
  { name: 'Ritu Malhotra', location: 'Greater Noida', stars: 4, event: 'Mehndi Dance', text: 'Sarthak came to our home for every session which was so convenient. The bridesmaids group dance was energetic, fun, and perfectly timed. Highly recommend!', initials: 'RM', color: '#059669' },
  { name: 'Vikash & Pooja Singh', location: 'Ghaziabad', stars: 5, event: 'Reception Dance', text: 'We wanted a Bollywood-meets-Western fusion dance for our reception. Sarthak nailed it! The waltz transition into Bollywood was absolute genius!', initials: 'VS', color: '#2563eb' },
  { name: 'Anita Reddy', location: 'Delhi', stars: 5, event: 'Sangeet', text: 'I booked online sessions since I was abroad. The quality of teaching was outstanding. Sarthak recorded every step and I could practice anytime!', initials: 'AR', color: '#db2777' },
  { name: 'The Verma Wedding', location: 'Gurgaon', stars: 5, event: 'Full Wedding', text: 'Sarthak handled ALL our dance performances - bride solo, couple dance, and 3 group dances. His coordination and creativity are unmatched!', initials: 'VW', color: '#8b5cf6' },
];

const videoTestimonials = [
  { name: 'Neha & Arjun', event: 'Sangeet Performance', duration: '2:30', color: '#daa520' },
  { name: 'The Mehta Family', event: 'Group Dance', duration: '3:15', color: '#008080' },
  { name: 'Kavya - Bride Solo', event: 'Solo Performance', duration: '1:45', color: '#4b0032' },
  { name: 'Raj & Simran', event: 'First Dance', duration: '2:00', color: '#b8860b' },
];

export default function Testimonials() {
  const pageRef = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll);
    return () => el?.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
    }
  };

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
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: `radial-gradient(circle at 70% 40%, #daa520 0%, transparent 40%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <p className="font-script" style={{ color: '#daa520', fontSize: 24, marginBottom: 12 }}>What Clients Say</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Testimonials</h1>
          <p style={{ color: '#9ca3af', maxWidth: 640, margin: '0 auto', fontSize: 18 }}>Hear from the couples and families who trusted us with their most precious moments.</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 32, fontSize: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} style={{ color: '#daa520', fill: '#daa520' }} />)}
            </div>
            <span style={{ color: '#d1d5db' }}>4.9/5 Average</span>
            <span style={{ color: '#6b7280' }}>|</span>
            <span style={{ color: '#d1d5db' }}>200+ Reviews</span>
          </div>
        </div>
      </section>

      {/* Horizontal Carousel */}
      <section style={{ padding: 'clamp(60px, 8vw, 80px)', background: 'white', position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>Real Stories</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e' }}>Client Testimonials</h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0' }}><Sparkles size={14} style={{ color: '#daa520' }} /></div>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 24 }}>
          <button onClick={() => scroll('left')} disabled={!canScrollLeft} style={{
            width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: canScrollLeft ? 'pointer' : 'default', transition: 'all 0.3s', background: 'transparent',
            border: `1px solid ${canScrollLeft ? '#daa520' : '#e5e7eb'}`,
            color: canScrollLeft ? '#daa520' : '#d1d5db',
          }}><ChevronLeft size={18} /></button>
          <button onClick={() => scroll('right')} disabled={!canScrollRight} style={{
            width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: canScrollRight ? 'pointer' : 'default', transition: 'all 0.3s', background: 'transparent',
            border: `1px solid ${canScrollRight ? '#daa520' : '#e5e7eb'}`,
            color: canScrollRight ? '#daa520' : '#d1d5db',
          }}><ChevronRight size={18} /></button>
        </div>

        {/* Scrollable */}
        <div ref={scrollRef} className="testimonial-scroll" style={{ paddingLeft: 16, paddingRight: 16 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              width: 360, flexShrink: 0, background: 'linear-gradient(135deg, white, #fdf8ef)',
              borderRadius: 16, padding: 24, border: '1px solid #f3f4f6',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} style={{ color: j < t.stars ? '#daa520' : '#d1d5db', fill: j < t.stars ? '#daa520' : 'none' }} />
                ))}
                <span style={{ fontSize: 12, color: '#9ca3af', marginLeft: 8 }}>{t.event}</span>
              </div>

              <Quote size={24} style={{ color: 'rgba(218,165,32,0.2)', marginBottom: 12 }} />
              <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 20 }}>"{t.text}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 12px ${t.color}40`,
                }}>
                  <span style={{ color: 'white', fontSize: 12, fontWeight: 700 }}>{t.initials}</span>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 14, margin: 0 }}>{t.name}</p>
                  <p style={{ color: '#9ca3af', fontSize: 12, margin: 0, display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} /> {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section style={{ 
        padding: 'clamp(60px, 8vw, 150px)', 
        background: '#1a1a2e',
        position: 'relative' 
      }}>
        {/* Subtle background glow */}
        <div style={{ 
          position: 'absolute', inset: 0, opacity: 0.1, 
          backgroundImage: `radial-gradient(circle at 20% 30%, #daa520 0%, transparent 50%)` 
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="font-script" style={{ color: '#daa520', fontSize: 20, marginBottom: 8 }}>Watch & Listen</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white' }}>Video Testimonials</h2>
            <div className="ornate-divider" style={{ maxWidth: 280, margin: '16px auto 0' }}><Sparkles size={14} style={{ color: '#daa520' }} /></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {videoTestimonials.map((v, i) => (
              <div 
                key={i} 
                className="reveal" 
                onClick={() => setSelectedVideo(v.url)} 
                style={{ cursor: 'pointer', transitionDelay: `${i * 0.1}s` }}
              >
                <div style={{ 
                  aspectRatio: '4/5', 
                  background: '#000', 
                  borderRadius: 16, 
                  position: 'relative', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(218,165,32,0.15)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}>
                  {/* Video Preview with Hover logic */}
                  <video 
                    src={`${v.url}#t=0.5`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      opacity: 0.6,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.play();
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0.5;
                      e.currentTarget.style.opacity = '0.6';
                    }}
                    muted 
                    playsInline
                  />

                  {/* Play Button Overlay */}
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none' 
                  }}>
                    <div style={{ 
                      width: 60, height: 60, borderRadius: '50%', 
                      background: 'rgba(218,165,32,0.9)', display: 'flex', 
                      alignItems: 'center', justifyContent: 'center', 
                      boxShadow: '0 8px 25px rgba(184,134,11,0.4)' 
                    }}>
                      <Play size={24} style={{ color: '#1a1a2e', marginLeft: 2 }} fill="#1a1a2e" />
                    </div>
                  </div>

                  {/* Gradient Info Overlay */}
                  <div style={{ 
                    position: 'absolute', bottom: 0, left: 0, right: 0, 
                    padding: '30px 20px 20px', 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' 
                  }}>
                    <p style={{ color: 'white', fontWeight: 600, fontSize: 16, margin: 0 }}>{v.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                      <span style={{ color: '#daa520', fontSize: 13, fontWeight: 500 }}>{v.event}</span>
                      <span style={{ color: '#9ca3af', fontSize: 12 }}>{v.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(to right, #4b0032, #1a1a2e)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '200+', label: 'Happy Reviews' },
            { value: '98%', label: 'Recommend Us' },
            { value: '100%', label: 'On-Time Delivery' },
          ].map((s, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="gold-shimmer" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 0 }}>{s.value}</p>
              <p style={{ color: '#9ca3af', fontSize: 14, marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 80px) 0', background: 'white' }}>
        <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a2e', marginBottom: 16 }}>Join Our Family of Happy Clients</h2>
          <p style={{ color: '#6b7280', marginBottom: 32 }}>Your wedding performance could be our next success story!</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: 'linear-gradient(to right, #daa520, #b8860b)', color: '#1a1a2e', borderRadius: 9999, fontWeight: 700, fontSize: 18, textDecoration: 'none' }}>
            Start Your Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}