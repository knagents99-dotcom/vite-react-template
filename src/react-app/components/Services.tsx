import "./Services.css";

const services = [
  {
    icon: "🏠",
    title: "Residential Cleaning",
    description:
      "Complete top-to-bottom home cleaning including kitchens, bathrooms, bedrooms, and living areas. We bring all supplies and equipment.",
    features: ["Deep cleaning available", "Eco-friendly products", "Flexible scheduling"],
  },
  {
    icon: "🏢",
    title: "Commercial Cleaning",
    description:
      "Professional office and commercial space cleaning tailored to your business hours. Fully insured and bonded for your peace of mind.",
    features: ["After-hours service", "Customized plans", "Janitorial supplies included"],
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    description:
      "Intensive cleaning for move-ins, move-outs, post-renovation, or seasonal refreshes. Every corner gets thorough attention.",
    features: ["Inside appliances", "Cabinet interiors", "Baseboards & vents"],
  },
  {
    icon: "🛋️",
    title: "Room-by-Room Monthly Service",
    description:
      "Our flagship monthly plan keeps your home spotless room by room. Starting at $1,000/month per room — comprehensive, consistent, reliable.",
    features: ["Dedicated cleaner", "Monthly scheduling", "Starting at $1,000/room/mo"],
    highlight: true,
  },
  {
    icon: "🪟",
    title: "Window & Glass Cleaning",
    description:
      "Streak-free window washing for interior and exterior surfaces. Available as a standalone service or add-on to any plan.",
    features: ["Interior & exterior", "Streak-free finish", "High-reach equipment"],
  },
  {
    icon: "🧹",
    title: "Post-Construction Cleaning",
    description:
      "Specialized cleaning after renovations or construction projects. We remove dust, debris, and building residue to reveal a fresh, clean space.",
    features: ["Fine dust removal", "Surface polishing", "Debris disposal"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Cleaning Services Tailored to You</h2>
          <p className="section-subtitle">
            From routine maintenance to intensive deep cleans, Raj Cleaning Service
            delivers professional results across Canada.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card ${s.highlight ? "service-card--highlight" : ""}`}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              <ul className="service-features">
                {s.features.map((f) => (
                  <li key={f}>
                    <span className="feature-check">✓</span> {f}
                  </li>
                ))}
              </ul>
              {s.highlight && (
                <div className="service-badge">Most Popular</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
