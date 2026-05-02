import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "$1,000",
    period: "/ room / month",
    description: "Perfect for keeping a single room consistently clean on a monthly basis.",
    features: [
      "1 room per month",
      "4 cleaning visits (weekly)",
      "All cleaning supplies included",
      "Eco-friendly products",
      "Satisfaction guarantee",
      "Online booking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Home Plus",
    price: "$2,800",
    period: "/ month",
    description: "Our most popular plan — ideal for 3-bedroom homes wanting full monthly coverage.",
    features: [
      "Up to 3 rooms per month",
      "Weekly cleaning visits",
      "All cleaning supplies included",
      "Deep clean every 2nd visit",
      "Priority scheduling",
      "Dedicated cleaning professional",
      "Satisfaction guarantee",
      "24/7 customer support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium Home",
    price: "$4,500",
    period: "/ month",
    description: "Full-home luxury service for larger residences requiring consistent, top-tier care.",
    features: [
      "Up to 5 rooms per month",
      "Bi-weekly & on-demand visits",
      "All cleaning supplies included",
      "Deep clean every visit",
      "Window cleaning included",
      "Priority & same-day booking",
      "Dedicated team of 2",
      "Monthly inspection report",
      "24/7 customer support",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Simple, Honest Rates</h2>
          <p className="section-subtitle">
            No hidden fees. Starting at just $1,000/room/month — professional-grade
            cleaning at a predictable monthly cost.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
              </div>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="check-icon">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={plan.popular ? "btn-primary plan-btn" : "btn-outline plan-btn"}
                onClick={scrollToContact}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <span>💬</span>
          <span>
            Need a custom plan for your business or multi-unit property?{" "}
            <button className="pricing-link" onClick={scrollToContact}>
              Contact us
            </button>{" "}
            for a tailored quote.
          </span>
        </div>
      </div>
    </section>
  );
}
