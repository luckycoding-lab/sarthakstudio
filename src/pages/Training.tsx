import { Link } from 'react-router-dom';
import { Play, BookOpen, Target, Clock, Award, Users, Lightbulb, X 
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import video14 from '../assets/online training/14.mp4';
import video16 from '../assets/online training/16.mp4';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('visible'); 
      });
    }, { threshold: 0.1 });
    
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    
    return () => obs.disconnect();
  }, []);

  return ref;
}

// Extract YouTube video ID
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:[?&]v=|\/embed\/|\/shorts\/|youtu\.be\/)([^&#]+)/);
  return match ? match[1] : null;
}

// Data Arrays
const steps = [
  { num: '01', title: 'Consultation & Song Selection', desc: 'Discuss vision and choose songs.', icon: BookOpen },
  { num: '02', title: 'Choreography Creation', desc: 'Custom routine for your skill level.', icon: Target },
  { num: '03', title: 'Step-by-Step Learning', desc: 'Break down moves into small sections.', icon: Clock },
  { num: '04', title: 'Practice & Refinement', desc: 'Build confidence with guidance.', icon: Award },
  { num: '05', title: 'Dress Rehearsal', desc: 'Full run-through in your outfit.', icon: Users },
  { num: '06', title: 'Show Time!', desc: 'Take the stage with confidence!', icon: Lightbulb },
];

// Video Content Data
const videoData = [
  { title: 'Teaching a couple routine', url: video14, color: '#daa520', isLocal: true },
  { title: 'Teaching a couple routine', url: video16, color: '#daa520', isLocal: true }
];

export default function Training() {
  const ref = useReveal();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (url: string) => setActiveVideo(url);
  const closeVideo = () => setActiveVideo(null);

  // Close on Escape & Lock Scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeVideo(); };
    if (activeVideo) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1a1a2e", textAlign: 'center', padding: '40px' }}>
        <div className="reveal">
          <p className="font-script" style={{ color: '#daa520', fontSize: 24 }}>How We Teach</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', color: 'white', fontFamily: 'var(--font-serif)' }}>Training Methodology</h1>
        </div>
      </section>

      {/* Video Montage */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
            <div className="grid grid-cols-2 gap-4">
              {videoData.map((video, i) => {
                const videoId = getYouTubeId(video.url);
                return (
                  <div 
                    key={i} 
                    onClick={() => openVideo(video.url)}
                    style={{ aspectRatio: '1', background: '#1a1a2e', borderRadius: 12, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                  >
                    {/* THUMBNAIL LOGIC */}
                    {video.isLocal ? (
                      /* Auto-generate thumbnail from local video frame at 0.1s */
                      <video 
                        src={`${video.url}#t=0.1`} 
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                        muted
                        playsInline
                      />
                    ) : (
                      /* YouTube Thumbnail */
                      videoId && (
                        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                      )
                    )}

                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#daa520', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Play size={24} fill="#1a1a2e" />
                      </div>
                    </div>
                    <p style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', fontSize: 12, background: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: 4 }}>{video.title}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <h2 style={{ fontSize: 32, marginBottom: 20 }}>See Sarthak & Team in Action</h2>
              <p style={{ color: '#666', marginBottom: 20 }}>Watch our training sessions to see how we transform beginners into performers.</p>
              <Link to="/gallery" style={{ color: '#daa520', fontWeight: 'bold', textDecoration: 'none' }}>View Full Gallery →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL — DYNAMIC SWITCHER */}
      {activeVideo && (
        <div onClick={closeVideo} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '900px', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={closeVideo} style={{ position: 'absolute', top: -40, right: 0, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={32} />
            </button>
            <div style={{ aspectRatio: '16/9', background: 'black', borderRadius: 12, overflow: 'hidden' }}>
              
              {/* Check if video is local or YouTube */}
              {activeVideo.includes('.mp4') || activeVideo.includes('blob:') ? (
                <video src={activeVideo} controls autoPlay style={{ width: '100%', height: '100%' }} />
              ) : (
                <iframe 
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`} 
                  style={{ width: '100%', height: '100%', border: 'none' }} 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen 
                />
              )}

            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 style={{ marginBottom: 40 }}>Your Journey to the Stage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {steps.map((s, i) => (
              <div key={i} className="reveal" style={{ background: 'white', padding: 30, borderRadius: 15, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ color: '#daa520', marginBottom: 15 }}><s.icon size={30} /></div>
                <h3 style={{ fontSize: 18, fontWeight: 'bold' }}>{s.title}</h3>
                <p style={{ color: '#777', fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}