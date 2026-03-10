import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  CheckCircle,
  Navigation,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const locationData = [
  {
    name: "Delhi",
    area: "South Delhi, Central Delhi, North Delhi, West Delhi, East Delhi",
    weddings: "150+",
    testimonial: '"Sarthak made our sangeet night absolutely magical!" - Priya S.',
    rating: 4.9,
    color: "#daa520",
  },
  {
    name: "Gurgaon",
    area: "DLF, Sohna Road, Golf Course Road, MG Road",
    weddings: "120+",
    testimonial: '"Best choreographer in Gurgaon. Our group dance was a hit!" - Rahul M.',
    rating: 4.9,
    color: "#008080",
  },
  {
    name: "Lucknow",
    area: "Gomti Nagar, Hazratganj, Indira Nagar, Aliganj",
    weddings: "45+",
    testimonial: '"Brought a royal touch to our Awadhi wedding!" - Sameer Z.',
    rating: 4.9,
    color: "#800000",
  },
  {
    name: "Kanpur",
    area: "Civil Lines, Swaroop Nagar, Kidwai Nagar, Azad Nagar",
    weddings: "35+",
    testimonial: '"Professional and energetic sessions at home!" - Kavita L.',
    rating: 4.8,
    color: "#1e3a8a",
  },
  {
    name: "Agra",
    area: "Fatehabad Road, Sanjay Place, Dayal Bagh",
    weddings: "30+",
    testimonial: '"Perfectly choreographed our destination wedding." - Rohit G.',
    rating: 4.9,
    color: "#991b1b",
  },
  {
    name: "Noida",
    area: "Sector 18, Greater Noida West, Sector 62",
    weddings: "80+",
    testimonial: '"Perfect for our couple dance. So creative!" - Sneha & Arun',
    rating: 4.8,
    color: "#4b0032",
  },
  {
    name: "Mathura",
    area: "Krishna Nagar, Goverdhan Road, Refinery Area",
    weddings: "20+",
    testimonial: '"Beautifully blended traditional and modern styles."',
    rating: 4.7,
    color: "#ea580c",
  },
  {
    name: "Aligarh",
    area: "Civil Lines, Ramghat Road, Kwarsi",
    weddings: "15+",
    testimonial: '"Very patient with our large family group!"',
    rating: 4.8,
    color: "#374151",
  },
  {
    name: "Firozabad",
    area: "Sugharganj, Kotla Road, SNM Hospital Area",
    weddings: "12+",
    testimonial: '"Excellent attention to detail."',
    rating: 4.7,
    color: "#4d7c0f",
  },
  {
    name: "Shikohabad",
    area: "Main Market, Station Road, Katra",
    weddings: "10+",
    testimonial: '"Professional choreography even in smaller towns."',
    rating: 4.8,
    color: "#0369a1",
  },
  {
    name: "Etah & Kasganj",
    area: "City Center, Soron, Ganjdundwara regions",
    weddings: "8+",
    testimonial: '"Simplified steps that everyone could follow."',
    rating: 4.6,
    color: "#7c3aed",
  },
];

export default function Locations() {
  const ref = useReveal();
  const [activeLocation, setActiveLocation] = useState(0);

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
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage: `radial-gradient(circle at 40% 60%, #008080 0%, transparent 50%)`,
          }}
        />
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up"
          style={{ position: "relative", zIndex: 10, textAlign: "center" }}
        >
          <p
            className="font-script"
            style={{ color: "#daa520", fontSize: 24, marginBottom: 12 }}
          >
            Where We Serve
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 60px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              color: "white",
              marginBottom: 16,
            }}
          >
            Locations We Cover
          </h1>
          <p
            style={{
              color: "#9ca3af",
              maxWidth: 640,
              margin: "0 auto",
              fontSize: 18,
            }}
          >
            Premium wedding dance choreography across the entire Delhi NCR
            region. We come to you!
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <section
        style={{ padding: "clamp(20px, 8vw, 150px)", background: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "flex-start",
            }}
          >
            {/* Map */}
            <div className="reveal">
              <div
                style={{
                  position: "relative",
                  background: "linear-gradient(135deg, #1a1a2e, #2a1a3e)",
                  borderRadius: 24,
                  padding: 48,
                  aspectRatio: "1",
                  maxWidth: 480,
                  margin: "0 auto",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 48,
                    border: "2px dashed rgba(218,165,32,0.2)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 80,
                    border: "1px dashed rgba(218,165,32,0.1)",
                    borderRadius: "50%",
                  }}
                />

                {/* Center */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  <button
                    onClick={() => setActiveLocation(0)}
                    style={{
                      position: "relative",
                      border: "none",
                      cursor: "pointer",
                      background: "none",
                      padding: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 25px rgba(218,165,32,0.4)",
                        transition: "all 0.3s",
                        background:
                          activeLocation === 0
                            ? "#daa520"
                            : "rgba(218,165,32,0.3)",
                        transform:
                          activeLocation === 0 ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <span
                        style={{
                          color: "#1a1a2e",
                          fontWeight: 700,
                          fontSize: 12,
                        }}
                      >
                        Delhi
                      </span>
                    </div>
                  </button>
                </div>

                {/* Surrounding cities */}
                {[
                  { name: "Gurgaon", top: "65%", left: "25%", idx: 1 },
                  { name: "Noida", top: "35%", left: "75%", idx: 2 },
                  { name: "Faridabad", top: "80%", left: "55%", idx: 3 },
                  { name: "Gr. Noida", top: "55%", left: "85%", idx: 4 },
                  { name: "Ghaziabad", top: "20%", left: "60%", idx: 5 },
                ].map((city) => (
                  <button
                    key={city.idx}
                    onClick={() => setActiveLocation(city.idx)}
                    style={{
                      position: "absolute",
                      top: city.top,
                      left: city.left,
                      transform: "translate(-50%, -50%)",
                      border: "none",
                      cursor: "pointer",
                      background: "none",
                      padding: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        transition: "all 0.3s",
                        fontSize: 10,
                        fontWeight: 700,
                        background:
                          activeLocation === city.idx
                            ? "#daa520"
                            : "rgba(255,255,255,0.1)",
                        color:
                          activeLocation === city.idx ? "#1a1a2e" : "#d1d5db",
                        transform:
                          activeLocation === city.idx
                            ? "scale(1.1)"
                            : "scale(1)",
                      }}
                    >
                      {city.name}
                    </div>
                  </button>
                ))}

                <svg
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="50"
                    y1="50"
                    x2="25"
                    y2="65"
                    stroke="#daa520"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="75"
                    y2="35"
                    stroke="#daa520"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="55"
                    y2="80"
                    stroke="#daa520"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="85"
                    y2="55"
                    stroke="#daa520"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="60"
                    y2="20"
                    stroke="#daa520"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>

            {/* Location Details */}
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <p
                className="font-script"
                style={{ color: "#daa520", fontSize: 20, marginBottom: 8 }}
              >
                Explore Areas
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 28px)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 32,
                }}
              >
                Select a Location
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                {locationData.map((loc, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveLocation(i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: 16,
                      borderRadius: 12,
                      transition: "all 0.3s",
                      cursor: "pointer",
                      background:
                        activeLocation === i
                          ? "linear-gradient(to right, #fdf8ef, white)"
                          : "#f9fafb",
                      border:
                        activeLocation === i
                          ? "2px solid rgba(218,165,32,0.3)"
                          : "1px solid #f3f4f6",
                      boxShadow:
                        activeLocation === i
                          ? "0 8px 25px rgba(0,0,0,0.08)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <MapPin size={18} style={{ color: loc.color }} />
                        <span style={{ fontWeight: 700, color: "#1a1a2e" }}>
                          {loc.name}
                        </span>
                      </div>
                      <span style={{ fontSize: 14, color: "#6b7280" }}>
                        {loc.weddings} weddings
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active details */}
              <div
                style={{
                  background: "linear-gradient(135deg, #fdf8ef, white)",
                  borderRadius: 16,
                  padding: 24,
                  border: "1px solid rgba(218,165,32,0.1)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Navigation size={18} style={{ color: "#daa520" }} />{" "}
                  {locationData[activeLocation].name}
                </h3>
                <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 12 }}>
                  {locationData[activeLocation].area}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 12,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      style={{ color: "#daa520", fill: "#daa520" }}
                    />
                  ))}
                  <span
                    style={{ fontSize: 14, color: "#6b7280", marginLeft: 4 }}
                  >
                    {locationData[activeLocation].rating}
                  </span>
                </div>
                <blockquote
                  style={{
                    color: "#4b5563",
                    fontSize: 14,
                    fontStyle: "italic",
                    borderLeft: "2px solid #daa520",
                    paddingLeft: 12,
                    marginBottom: 16,
                    margin: "0 0 16px",
                  }}
                >
                  {locationData[activeLocation].testimonial}
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Users size={14} style={{ color: "#daa520" }} />
                  <span style={{ fontSize: 14, color: "#6b7280" }}>
                    {locationData[activeLocation].weddings} successful weddings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Locations Grid */}
      <section
        style={{ padding: "clamp(20px, 8vw, 150px)", background: "#faf9f6" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p
              className="font-script"
              style={{ color: "#daa520", fontSize: 20, marginBottom: 8 }}
            >
              Service Coverage
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              All Service Areas
            </h2>
            <div
              className="ornate-divider"
              style={{ maxWidth: 280, margin: "16px auto 0" }}
            >
              <Sparkles size={14} style={{ color: "#daa520" }} />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {locationData.map((loc, i) => (
              <div
                key={i}
                className="reveal region-card"
                style={{
                  borderRadius: 16,
                  background: "white",
                  padding: 24,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: loc.color + "20",
                    }}
                  >
                    <MapPin size={18} style={{ color: loc.color }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#1a1a2e",
                        margin: 0,
                      }}
                    >
                      {loc.name}
                    </h3>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={10}
                          style={{ color: "#daa520", fill: "#daa520" }}
                        />
                      ))}
                      <span
                        style={{
                          fontSize: 12,
                          color: "#9ca3af",
                          marginLeft: 4,
                        }}
                      >
                        {loc.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 12 }}>
                  {loc.area}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 12,
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <span
                    style={{ fontSize: 14, fontWeight: 500, color: "#1a1a2e" }}
                  >
                    {loc.weddings} weddings
                  </span>
                  <CheckCircle size={16} style={{ color: "#22c55e" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "clamp(20px, 8vw, 150px)",
          background: "linear-gradient(135deg, #1a1a2e, #2a1a3e)",
        }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          <MapPin
            size={48}
            style={{
              color: "#daa520",
              margin: "0 auto 24px",
              display: "block",
            }}
          />
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              color: "white",
              marginBottom: 16,
            }}
          >
            We Come to Your Doorstep
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: 32 }}>
            Anywhere in Delhi NCR - we bring premium dance training to your
            home.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 40px",
              background: "linear-gradient(to right, #daa520, #b8860b)",
              color: "#1a1a2e",
              borderRadius: 9999,
              fontWeight: 700,
              fontSize: 18,
              textDecoration: "none",
            }}
          >
            Book Home Session <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}