import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import LogoImg from '../assets/Logo/Logo.png';
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Training", path: "/training" },
  { name: "Locations", path: "/locations" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s ease",
        background: scrolled ? "rgba(26,26,46,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.3)" : "none",
        padding: scrolled ? "8px 0" : "16px 0",
      }}
      className="flex flex-col md:flex-row"
    >
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group no-underline">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                // background: "linear-gradient(135deg, #daa520, #b8860b)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // boxShadow: "0 4px 15px rgba(184,134,11,0.3)",
                transition: "box-shadow 0.3s",
              }}
            >
              <span
                style={{
                  color: "#1a1a2e",
                  fontWeight: 700,
                  fontSize: 18,
                  fontFamily: "var(--font-serif)",
                }}
              >
              <img src={LogoImg} alt="Studio Sarthak Logo" style={{ width: '100%', height: 'auto' }} />
                
              </span>
            </div>
            <div className="hidden sm:block">
              <h1
                style={{
                  color: "white",
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Studio Sarthak
              </h1>
              <p
                style={{
                  color: "#daa520",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Wedding Choreography
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: "8px 12px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 8,
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  color:
                    location.pathname === link.path ? "#daa520" : "#d1d5db",
                  background:
                    location.pathname === link.path
                      ? "rgba(218,165,32,0.1)"
                      : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.path) {
                    (e.target).style.color = "white";
                    (e.target).style.background =
                      "rgba(255,255,255,0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    (e.target).style.color = "#d1d5db";
                    (e.target).style.background = "transparent";
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 ml-3 px-5 py-2 rounded-full text-[14px] font-bold no-underline transition-all duration-300"
            style={{
                marginLeft: 12,
                padding: "8px 20px",
                background: "linear-gradient(to right, #daa520, #b8860b)",
                color: "#1a1a2e",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s",
            }}
          >
            <Phone size={14} /> Book Now
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            style={{
              color: "white",
              padding: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          maxHeight: open ? 600 : 0,
          opacity: open ? 1 : 0,
        }}
        className="lg:hidden"
      >
        <div
          style={{
            background: "rgba(26,26,46,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(218,165,32,0.1)",
            padding: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  color:
                    location.pathname === link.path ? "#daa520" : "#d1d5db",
                  background:
                    location.pathname === link.path
                      ? "rgba(218,165,32,0.1)"
                      : "transparent",
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: 16,
                padding: "12px 20px",
                background: "linear-gradient(to right, #daa520, #b8860b)",
                color: "#1a1a2e",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
