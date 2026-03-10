import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Users,
  Music,
  Star,
  MapPin,
  ArrowRight,
  Heart,
  Sparkles,
  Award,
  Clock,
  X,
} from "lucide-react";

// ASSET IMPORTS
import vid1 from "../assets/Solo/1.mp4";
import vid6 from "../assets/Couple/6.mp4";
import vid11 from "../assets/Group/11.mp4";
import vid4 from "../assets/Home Training/4.mp4";
import vid13 from "../assets/Group/13.mp4";
import vid14 from "../assets/online training/14.mp4";
import ProfileImg from "../assets/Profile/Profile.jpeg";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    icon: Heart,
    title: "Couple Dance",
    desc: "Romantic choreography for the bride and groom first dance - a memory that lasts forever.",
    color: "#e11d48",
  },
  {
    icon: Users,
    title: "Group Dance",
    desc: "Energetic group performances for sangeet, reception and family celebrations.",
    color: "#7c3aed",
  },
  {
    icon: Music,
    title: "Solo Performance",
    desc: "Stunning solo dance routines that let you shine on your special day.",
    color: "#0d9488",
  },
  {
    icon: Sparkles,
    title: "Bride Special",
    desc: "Custom choreography designed exclusively for the bride grand entry and performance.",
    color: "#d97706",
  },
];

const stats = [
  { value: "500+", label: "Weddings Choreographed" },
  { value: "1000+", label: "Happy Families" },
  { value: "6+", label: "Cities Covered" },
  { value: "8+", label: "Years Experience" },
];

// VIDEO DATA
const videoData = [
  {
    url: vid1,
    title: "Bride Parents — Kudmayi Song",
    cat: "Solo Dance",
    views: "15K",
  },
  {
    url: vid6,
    title: "Priya & Rahul — Sangeet Night",
    cat: "Couple Dance",
    views: "12K",
  },
  {
    url: vid11,
    title: "Family Group Performance",
    cat: "Group Dance",
    views: "8.5K",
  },
  { url: vid4, title: "Home Practice Session", cat: "Training", views: "5K" },
  { url: vid13, title: "Mehndi Celebration", cat: "Group Dance", views: "10K" },
  { url: vid14, title: "Offline Training Session", cat: "Online", views: "7K" },
];

export default function Home() {
  const sectionRef = useReveal();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div ref={sectionRef}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "#1a1a2e" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              backgroundImage: `radial-gradient(circle at 20% 50%, #4b0032 0%, transparent 50%), radial-gradient(circle at 80% 50%, #008080 0%, transparent 50%), radial-gradient(circle at 50% 80%, #daa520 0%, transparent 40%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage:
                "linear-gradient(rgba(218,165,32,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218,165,32,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div
          className="float"
          style={{
            position: "absolute",
            top: "25%",
            left: 40,
            width: 80,
            height: 80,
            border: "1px solid rgba(218,165,32,0.1)",
            borderRadius: "50%",
          }}
        />
        <div
          className="float-delay"
          style={{
            position: "absolute",
            bottom: "33%",
            right: 40,
            width: 128,
            height: 128,
            border: "1px solid rgba(218,165,32,0.05)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 16px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div className="fade-in-up">
            <p
              className="font-script"
              style={{
                color: "#daa520",
                fontSize: "clamp(10px, 4vw, 28px)",
                marginBottom: 16,
              }}
            >
              Welcome to
            </p>
          </div>
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1
              style={{
                fontSize: "clamp(40px, 8vw, 80px)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                color: "white",
                marginBottom: 8,
                lineHeight: 1.1,
              }}
            >
              Studio <span className="gold-shimmer">Sarthak</span>
            </h1>
          </div>
          <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div
              className="ornate-divider"
              style={{ maxWidth: 400, margin: "24px auto" }}
            >
              <Sparkles size={16} style={{ color: "#daa520" }} />
            </div>
          </div>
          <div className="fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p
              style={{
                fontSize: "clamp(16px, 3vw, 22px)",
                color: "#d1d5db",
                marginBottom: 8,
                fontWeight: 300,
              }}
            >
              Make Your Wedding Performance{" "}
              <span style={{ color: "#daa520", fontWeight: 500 }}>
                Unforgettable
              </span>
            </p>
            <p
              style={{
                color: "#9ca3af",
                marginBottom: 40,
                fontSize: "clamp(14px, 2vw, 16px)",
                maxWidth: 640,
                margin: "0 auto 40px",
              }}
            >
              Premium wedding dance choreography by{" "}
              <span style={{ color: "white", fontWeight: 500 }}>
                Sarthak Diwakar
              </span>{" "}
              — transforming your special moments into mesmerizing performances
              across Delhi NCR.
            </p>
          </div>
          <div
            className="fade-in-up"
            style={{
              animationDelay: "0.7s",
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <Link
              to="/contact"
              className="pulse-glow"
              style={{
                padding: "16px 32px",
                background: "linear-gradient(to right, #daa520, #b8860b)",
                color: "#1a1a2e",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 18,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s",
              }}
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/gallery"
              style={{
                padding: "16px 32px",
                border: "2px solid rgba(218,165,32,0.4)",
                color: "#daa520",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 18,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s",
                background: "transparent",
              }}
            >
              <Play size={18} /> View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          background: "linear-gradient(to right, #1a1a2e, #2a1a3e, #1a1a2e)",
          padding: "48px 0",
          borderTop: "1px solid rgba(218,165,32,0.1)",
          borderBottom: "1px solid rgba(218,165,32,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 32,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{ textAlign: "center", transitionDelay: `${i * 0.1}s` }}
            >
              <p
                className="gold-shimmer"
                style={{
                  fontSize: "clamp(28px, 4vw, 36px)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {s.value}
              </p>
              <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section
        style={{ padding: "clamp(10px, 8vw, 112px)", background: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(40px, 5vw, 80px)",
              alignItems: "center",
            }}
          >
            <div className="reveal">
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    aspectRatio: "4/5",
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #1a1a2e, #2a1a3e)",
                    overflow: "hidden",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                    position: "relative",
                  }}
                >
                  <img
                    src={ProfileImg}
                    alt="Sarthak Diwakar Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          width: 120,
                          height: 128,
                          margin: "0 auto",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #daa520, #b8860b)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 16,
                          boxShadow: "0 10px 40px rgba(184,134,11,0.4)",
                        }}
                      >
                        <span
                          style={{
                            color: "#1a1a2e",
                            fontSize: 48,
                            fontFamily: "var(--font-serif)",
                            fontWeight: 700,
                          }}
                        >
                          SD
                        </span>
                      </div>
                      <h3
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontFamily: "var(--font-serif)",
                          fontWeight: 700,
                          margin: 0,
                        }}
                      >
                        Sarthak Diwakar
                      </h3>
                      <p
                        style={{
                          color: "#daa520",
                          fontSize: 14,
                          margin: "4px 0 0",
                        }}
                      >
                        Founder & Lead Choreographer
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -24,
                    right: 24,
                    background: "white",
                    borderRadius: 16,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    padding: "16px 24px",
                    border: "1px solid rgba(218,165,32,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #daa520, #d97706)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Award size={20} style={{ color: "white" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
                      8+ Years
                    </p>
                    <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>
                      Professional Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <p
                className="font-script"
                style={{ color: "#daa520", fontSize: 20, marginBottom: 8 }}
              >
                Our Story
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 24,
                }}
              >
                Crafting Dance Magic for Your{" "}
                <span style={{ color: "#4b0032" }}>Special Day</span>
              </h2>
              <p
                style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: 24 }}
              >
                Founded by <strong>Sarthak Diwakar</strong>, Studio Sarthak has
                been the premier choice for wedding dance choreography in Delhi
                NCR.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                {[
                  { icon: Clock, text: "Flexible Scheduling" },
                  { icon: MapPin, text: "Home Sessions Available" },
                  { icon: Users, text: "All Age Groups" },
                  { icon: Star, text: "Personalized Routines" },
                ].map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: 12,
                      borderRadius: 12,
                      background: "#fdf8ef",
                      border: "1px solid rgba(218,165,32,0.1)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: "#daa520", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#1a1a2e",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#daa520",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Learn More About Sarthak <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{ padding: "clamp(10px, 8vw, 150px)", background: "#faf9f6" }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ textAlign: "center" }}
        >
          <div className="reveal">
            <p
              className="font-script"
              style={{ color: "#daa520", fontSize: 20, marginBottom: 8 }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: 16,
              }}
            >
              Our Signature Services
            </h2>
            <div
              className="ornate-divider"
              style={{ maxWidth: 280, margin: "0 auto 48px" }}
            >
              <Sparkles size={14} style={{ color: "#daa520" }} />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="reveal card-glow"
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 24,
                  textAlign: "center",
                  border: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto 20px",
                    borderRadius: 16,
                    background: s.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 8px 25px ${s.color}40`,
                  }}
                >
                  <s.icon size={28} style={{ color: "white" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE - UPDATED WITH REAL VIDEOS */}
      <section
        style={{
          padding: "clamp(10px, 8vw, 112px)",
          background: "#1a1a2e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 30% 40%, #daa520 0%, transparent 40%)`,
          }}
        />
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="reveal" style={{ textAlign: "center" }}>
            <p
              className="font-script"
              style={{ color: "#daa520", fontSize: 20, marginBottom: 8 }}
            >
              Our Work
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                color: "white",
                marginBottom: 16,
              }}
            >
              Featured Performances
            </h2>
            <div
              className="ornate-divider"
              style={{ maxWidth: 280, margin: "0 auto 48px" }}
            >
              <Sparkles size={14} style={{ color: "#daa520" }} />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {videoData.map((v, i) => (
              <div
                key={i}
                className="reveal"
                onClick={() => setSelectedVideo(v.url)}
                style={{ transitionDelay: `${i * 0.1}s`, cursor: "pointer" }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: "#000",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 12,
                    border: "1px solid rgba(218,165,32,0.15)",
                  }}
                >
                  <video
                    src={`${v.url}#t=0.5`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.6,
                    }}
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0.5;
                    }}
                    muted
                    playsInline
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(218,165,32,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Play
                        size={24}
                        style={{ color: "#1a1a2e", marginLeft: 2 }}
                        fill="#1a1a2e"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      padding: "4px 12px",
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(4px)",
                      borderRadius: 9999,
                      fontSize: 12,
                      color: "#daa520",
                      fontWeight: 500,
                    }}
                  >
                    {v.cat}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                      padding: "4px 8px",
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(4px)",
                      borderRadius: 4,
                      fontSize: 12,
                      color: "#d1d5db",
                    }}
                  >
                    {v.views} views
                  </div>
                </div>
                <div style={{ marginTop: 12, paddingLeft: 4 }}>
                  <h4
                    style={{
                      color: "white",
                      fontWeight: 500,
                      fontSize: 15,
                      margin: 0,
                    }}
                  >
                    {v.title}
                  </h4>
                  <p style={{ color: "#6b7280", fontSize: 14, marginTop: 4 }}>
                    Studio Sarthak
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: 48 }}
          >
            <Link
              to="/gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 32px",
                border: "2px solid rgba(218,165,32,0.4)",
                color: "#daa520",
                borderRadius: 9999,
                fontWeight: 600,
                textDecoration: "none",
                background: "transparent",
              }}
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{ padding: "clamp(10px, 8vw, 112px)", background: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal" style={{ textAlign: "center" }}>
            <p
              className="font-script"
              style={{ color: "#daa520", fontSize: 20, marginBottom: 8 }}
            >
              Why Studio
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: 16,
              }}
            >
              Why Families Trust Us
            </h2>
            <div
              className="ornate-divider"
              style={{ maxWidth: 280, margin: "0 auto 48px" }}
            >
              <Sparkles size={14} style={{ color: "#daa520" }} />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Personalized Choreography",
                desc: "Every routine is custom-created based on your song choice and skill level.",
                icon: "✨",
              },
              {
                title: "Home Training Available",
                desc: "We come to your doorstep across Delhi NCR.",
                icon: "🏠",
              },
              {
                title: "All Skill Levels Welcome",
                desc: "Whether you have two left feet or years of experience.",
                icon: "🎯",
              },
              {
                title: "Flexible Scheduling",
                desc: "Morning, evening, or weekend sessions available.",
                icon: "📅",
              },
              {
                title: "Online + Offline Options",
                desc: "Choose between live online classes or in-person sessions.",
                icon: "💻",
              },
              {
                title: "Affordable Packages",
                desc: "Premium choreography at competitive prices.",
                icon: "💰",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal card-glow"
                style={{
                  padding: 24,
                  borderRadius: 16,
                  border: "1px solid #f3f4f6",
                  background: "linear-gradient(135deg, white, #fdf8ef)",
                }}
              >
                <span
                  style={{ fontSize: 36, display: "block", marginBottom: 16 }}
                >
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS MARQUEE */}
      <section
        style={{
          padding: "48px 0",
          background: "#1a1a2e",
          overflow: "hidden",
          borderTop: "1px solid rgba(218,165,32,0.1)",
          borderBottom: "1px solid rgba(218,165,32,0.1)",
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, j) => (
            <div
              key={j}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
                padding: "0 16px",
              }}
            >
              {[
                "Delhi",
                "Gurgaon",
                "Noida",
                "Faridabad",
                "Greater Noida",
                "Ghaziabad",
                "Delhi NCR",
              ].map((loc, i) => (
                <span
                  key={`${j}-${i}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#9ca3af",
                    whiteSpace: "nowrap",
                    fontSize: 18,
                  }}
                >
                  <MapPin size={16} style={{ color: "#daa520" }} /> {loc}
                  <span style={{ color: "#daa520", margin: "0 16px" }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "clamp(10px, 8vw, 112px)",
          background: "linear-gradient(135deg, #4b0032, #1a1a2e)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 16px",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <p
            className="font-script"
            style={{ color: "#daa520", fontSize: 24, marginBottom: 16 }}
          >
            Ready to Dance?
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 48px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              color: "white",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Let's Make Your Wedding Day{" "}
            <span className="gold-shimmer">Magical</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <Link
              to="/contact"
              style={{
                padding: "16px 40px",
                background: "linear-gradient(to right, #daa520, #b8860b)",
                color: "#1a1a2e",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 18,
                textDecoration: "none",
              }}
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/917906678752"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 40px",
                background: "#25D366",
                color: "white",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 18,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <X
            size={40}
            color="white"
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              cursor: "pointer",
            }}
          />
          <div
            style={{ maxWidth: 1000, width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              style={{ width: "100%", borderRadius: 15 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}