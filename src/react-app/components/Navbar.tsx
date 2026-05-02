import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand" onClick={() => scrollTo("hero")}>
          <span className="brand-icon">✦</span>
          <span className="brand-name">Raj Cleaning Service</span>
        </div>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li><button onClick={() => scrollTo("services")}>Services</button></li>
          <li><button onClick={() => scrollTo("pricing")}>Pricing</button></li>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
          <li>
            <button className="nav-cta" onClick={() => scrollTo("contact")}>
              Get a Free Quote
            </button>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
