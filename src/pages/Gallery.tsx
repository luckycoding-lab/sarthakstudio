import { useState, useEffect, useRef } from 'react';
import { Play, X, Filter, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. IMPORT LOCAL ASSETS (Mapped to your folder structure)
import vid1 from '../assets/Solo/1.mp4';
import vid2 from '../assets/online training/2.mp4';
import vid4 from '../assets/Home Training/4.mp4';
import vid6 from '../assets/Couple/6.mp4';
import vid11 from '../assets/Group/11.mp4';
import vid13 from '../assets/Group/13.mp4';
import vid14 from '../assets/online training/14.mp4';
import vid15 from '../assets/online training/15.mp4';
import vid16 from '../assets/online training/16.mp4';

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

// 2. UPDATED VIDEO DATA (Linking to imported local files)
const videos = [
  { id: 1, url: vid1, title: 'Bride Parents — Kudmayi Song', category: 'Solo Dance', style: 'Semi-Classical', location: 'Noida', views: '15K', likes: '2.1K', desc: 'A stunning bride parents performance combining classical and modern moves.' },
  { id: 2, url: vid6, title: 'Priya & Rahul - Sangeet', category: 'Couple Dance', style: 'Bollywood', location: 'Delhi', views: '12K', likes: '1.2K', desc: 'A beautiful romantic performance that left everyone in tears of joy.' },
  { id: 3, url: vid11, title: 'Sharma Family Group Dance', category: 'Group Dance', style: 'Bollywood', location: 'Gurgaon', views: '8.5K', likes: '920', desc: 'A high-energy group of 15 family members dancing on a Bollywood mashup.' },
  { id: 4, url: vid4, title: 'Home Practice Session', category: 'Solo Dance', style: 'Contemporary', location: 'Delhi', views: '20K', likes: '3.5K', desc: 'Behind the scenes of our intensive home training sessions.' },
  { id: 5, url: vid13, title: 'Mehndi Celebration', category: 'Group Dance', style: 'Mixed', location: 'Greater Noida', views: '9K', likes: '1.1K', desc: 'The grand finale where both families join for an epic dance-off.' },
  { id: 6, url: vid14, title: 'Offline Training Session', category: 'Couple Dance', style: 'Bollywood', location: 'Remote', views: '18K', likes: '2.8K', desc: 'Our global students rocking their choreography via Zoom.' },
  { id: 7, url: vid15, title: 'Online Training Session', category: 'Group Dance', style: 'Bollywood', location: 'Faridabad', views: '10K', likes: '1.5K', desc: 'High energy group dance with cousins and friends.' },
  { id: 8, url: vid16, title: 'Online Training Session- Batch 02', category: 'Couple Dance', style: 'Western', location: 'Delhi', views: '11K', likes: '1.8K', desc: 'Elegance in motion during our western waltz training.' },
  { id: 9, url: vid2, title: 'Online Training Session- Batch 03', category: 'Solo Dance', style: 'Classical', location: 'Ghaziabad', views: '22K', likes: '4.2K', desc: 'Focusing on mudras and expressions in our solo workshop.' },
];

const categories = ['All', 'Couple Dance', 'Group Dance', 'Solo Dance'];
const styles = ['All Styles', 'Bollywood', 'Classical', 'Contemporary', 'Hip-Hop', 'Western', 'Semi-Classical', 'Mixed'];
const locations = ['All Locations', 'Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Greater Noida', 'Ghaziabad'];
const colors = ['#e11d48', '#7c3aed', '#d97706', '#0d9488', '#db2777', '#059669', '#ea580c', '#2563eb', '#c026d3'];

export default function Gallery() {
  const ref = useReveal();
  const [filter, setFilter] = useState('All');
  const [styleFilter, setStyleFilter] = useState('All Styles');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = videos.filter(v => {
    if (filter !== 'All' && v.category !== filter) return false;
    if (styleFilter !== 'All Styles' && v.style !== styleFilter) return false;
    if (locationFilter !== 'All Locations' && v.location !== locationFilter) return false;
    return true;
  });

  const currentIdx = selectedVideo ? filtered.findIndex(v => v.id === selectedVideo.id) : -1;
  const goNext = () => { if (currentIdx < filtered.length - 1) setSelectedVideo(filtered[currentIdx + 1]); };
  const goPrev = () => { if (currentIdx > 0) setSelectedVideo(filtered[currentIdx - 1]); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVideo(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section style={{minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1a1a2e", position: "relative", overflow: "hidden", padding: "80px 20px"}}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: `radial-gradient(circle at 50% 50%, #4b0032 0%, transparent 50%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <p className="font-script" style={{ color: '#daa520', fontSize: 24, marginBottom: 12 }}>Our Portfolio</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'white', marginBottom: 16 }}>Video Gallery</h1>
          <p style={{ color: '#9ca3af', maxWidth: 640, margin: '0 auto', fontSize: 18 }}>Watch our best wedding dance performances. Each video showcases the magic we create.</p>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{ background: 'white', borderBottom: '1px solid #f3f4f6'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: '16px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', paddingBottom: 4 }} className="scrollbar-hide">
              {categories.map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  padding: '8px 16px', borderRadius: 9999, fontSize: 14, fontWeight: 500,
                  whiteSpace: 'nowrap', border: 'none', cursor: 'pointer', transition: 'all 0.3s',
                  background: filter === c ? '#1a1a2e' : '#f3f4f6',
                  color: filter === c ? '#daa520' : '#4b5563',
                }}>{c}</button>
              ))}
            </div>
            <button onClick={() => setShowFilters(!showFilters)} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px',
              borderRadius: 9999, border: '1px solid #e5e7eb', fontSize: 14, fontWeight: 500,
              color: '#4b5563', cursor: 'pointer', background: 'white',
            }}>
              <Filter size={14} /> Filters
            </button>
          </div>
          {showFilters && (
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 16, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
              <select value={styleFilter} onChange={e => setStyleFilter(e.target.value)} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, background: 'white' }}>
                {styles.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, background: 'white' }}>
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Video Grid Section */}
      <section style={{ padding: 'clamp(10px, 8vw, 150px)', background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 32, textAlign: 'center' }}>{filtered.length} performances found</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {filtered.map((v, i) => (
              <div key={v.id} className="reveal" style={{ cursor: 'pointer', transitionDelay: `${i * 0.08}s` }} onClick={() => setSelectedVideo(v)}>
                <div style={{
                  aspectRatio: '16/9', background: '#1a1a2e', position: 'relative',
                  overflow: 'hidden', borderRadius: 12, border: '1px solid rgba(218,165,32,0.15)',
                }}>
                  {/* Local Video Thumbnail Preview */}
                  <video 
                    src={`${v.url}#t=0.5`} 
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                    muted 
                  />
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.3,
                    backgroundImage: `radial-gradient(circle at 50% 50%, ${colors[i % colors.length]} 0%, transparent 70%)`,
                  }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="play-btn-hover" style={{
                      width: 64, height: 64, borderRadius: '50%', background: 'rgba(218,165,32,0.9)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 30px rgba(184,134,11,0.3)',
                    }}>
                      <Play size={24} style={{ color: '#1a1a2e', marginLeft: 2 }} fill="#1a1a2e" />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: 10, left: 10, padding: '4px 12px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', borderRadius: 9999, fontSize: 12, color: '#daa520', fontWeight: 500 }}>{v.category}</div>
                </div>
                <div style={{ marginTop: 12, paddingLeft: 4 }}>
                  <h4 style={{ color: '#1a1a2e', fontWeight: 600, fontSize: 14, margin: 0 }}>{v.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8, color: '#9ca3af', fontSize: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={12} /> {v.views}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Heart size={12} /> {v.likes}</span>
                    <span>📍 {v.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODAL (Updated to play local videos) */}
      {selectedVideo && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={() => setSelectedVideo(null)}>
          <div style={{ maxWidth: 960, width: '100%' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: 20, margin: 0 }}>{selectedVideo.title}</h3>
              <button onClick={() => setSelectedVideo(null)} style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><X size={24} /></button>
            </div>
            <div style={{ aspectRatio: '16/9', background: 'black', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              {/* REAL VIDEO PLAYER */}
              <video 
                src={selectedVideo.url} 
                controls 
                autoPlay 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#9ca3af', fontSize: 14 }}>
                <span style={{ color: '#daa520' }}>{selectedVideo.category}</span>
                <span>{selectedVideo.style}</span>
                <span>📍 {selectedVideo.location}</span>
              </div>
              <p style={{ color: '#d1d5db', marginTop: 8, fontSize: 14 }}>{selectedVideo.desc}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
              <button onClick={goPrev} disabled={currentIdx <= 0} style={{ display: 'flex', alignItems: 'center', gap: 8, color: currentIdx <= 0 ? '#4b5563' : '#9ca3af', background: 'none', border: 'none', cursor: currentIdx <= 0 ? 'default' : 'pointer', fontSize: 14 }}><ChevronLeft size={20} /> Previous</button>
              <span style={{ color: '#6b7280', fontSize: 14 }}>{currentIdx + 1} / {filtered.length}</span>
              <button onClick={goNext} disabled={currentIdx >= filtered.length - 1} style={{ display: 'flex', alignItems: 'center', gap: 8, color: currentIdx >= filtered.length - 1 ? '#4b5563' : '#9ca3af', background: 'none', border: 'none', cursor: currentIdx >= filtered.length - 1 ? 'default' : 'pointer', fontSize: 14 }}>Next <ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}