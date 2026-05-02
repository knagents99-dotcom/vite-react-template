import "./Hero.css";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span>🍁</span> Proudly Canadian — Registered &amp; Serving Across Canada
        </div>

        <h1 className="hero-title">
          Professional Cleaning<br />
          <span className="hero-title-accent">You Can Trust</span>
        </h1>

        <p className="hero-description">
          Raj Cleaning Service delivers premium, reliable cleaning solutions for homes
          and businesses across Canada. Fully bonded, insured, and registered — so you
          can relax while we handle the spotless details.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Get a Free Quote
          </button>
          <button className="btn-outline hero-btn-outline" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
