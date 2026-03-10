import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Instagram, Youtube, Facebook } from 'lucide-react';
import LogoImg from '../assets/Logo/Logo.png';
export default function Footer() {
  return (
    <footer style={{ background: '#0d0d1a', color: '#9ca3af', position: 'relative', overflow: 'hidden', 
    padding: '0 20px'}}>
      {/* Gold line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #daa520, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '64px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ color: '#1a1a2e', fontWeight: 700, fontSize: 20, fontFamily: 'var(--font-serif)' }}>
                  <img src={LogoImg} alt="Studio Sarthak Logo" style={{ width: '100%', height: 'auto' }} />
                </span>
              </div>
              <div>
                <h3 style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, margin: 0 }}>Studio Sarthak</h3>
                <p style={{ color: '#daa520', fontSize: 12, letterSpacing: '0.1em', margin: 0 }}>Est. 2018</p>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Where Every Wedding Step Tells a Story. Premium wedding dance choreography by Sarthak Diwakar, serving the entire Delhi NCR region.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Facebook, label: 'Facebook' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9ca3af', transition: 'all 0.3s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(218,165,32,0.2)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(218,165,32,0.5)';
                    (e.currentTarget as HTMLElement).style.color = '#daa520';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = '#9ca3af';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 20, marginTop: 0 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'About Sarthak', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Video Gallery', path: '/gallery' },
                { name: 'Training', path: '/training' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.path} style={{ marginBottom: 12 }}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: 14, color: '#9ca3af', textDecoration: 'none',
                      display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#daa520'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = '#9ca3af'; }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(218,165,32,0.4)', flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 20, marginTop: 0 }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Solo Dance', 'Couple Dance', 'Group Dance', 'Bride & Groom Special', 'Online Sessions', 'Home Training'].map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <Link
                    to="/services"
                    style={{
                      fontSize: 14, color: '#9ca3af', textDecoration: 'none',
                      display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#daa520'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = '#9ca3af'; }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(218,165,32,0.4)', flexShrink: 0 }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 20, marginTop: 0 }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <MapPin size={16} style={{ color: '#daa520', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 14 }}>Delhi NCR — Gurgaon, Noida, Faridabad, Greater Noida, Ghaziabad</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Phone size={16} style={{ color: '#daa520', flexShrink: 0 }} />
                <a href="tel:+9179066 78752" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>+91 7906678752</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Mail size={16} style={{ color: '#daa520', flexShrink: 0 }} />
                <a href="mailto:info@spdancecompany.com" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>info@spdancecompany.com</a>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-block', padding: '10px 24px',
                  border: '1px solid rgba(218,165,32,0.5)', borderRadius: 9999,
                  color: '#daa520', fontSize: 14, fontWeight: 500,
                  textDecoration: 'none', transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.background = '#daa520';
                  (e.target as HTMLElement).style.color = '#1a1a2e';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.background = 'transparent';
                  (e.target as HTMLElement).style.color = '#daa520';
                }}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            padding: '20px 16px',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
            © {new Date().getFullYear()} Studio Sarthak. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: '#6b7280', margin: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
            Crafted with <Heart size={12} style={{ color: '#f87171' }} /> by Studio Sarthak
          </p>
        </div>
      </div>
    </footer>
  );
}
