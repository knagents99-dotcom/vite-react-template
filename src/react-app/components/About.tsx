import "./About.css";

const values = [
  { icon: "🍁", title: "Canadian Registered", desc: "Fully registered and operating under Canadian federal and provincial business regulations." },
  { icon: "🔒", title: "Bonded & Insured", desc: "Comprehensive liability insurance and bonded staff for your complete peace of mind." },
  { icon: "🌿", title: "Eco-Friendly Products", desc: "We use non-toxic, environmentally responsible cleaning products safe for families and pets." },
  { icon: "⭐", title: "Satisfaction Guaranteed", desc: "Not happy? We'll re-clean for free. Your satisfaction is our #1 priority — every time." },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-text">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">A Canadian Company Built on Trust</h2>
          <p className="about-body">
            Raj Cleaning Service was founded with a simple mission: to provide Canadians
            with reliable, high-quality cleaning they can count on. We are proudly registered
            in Canada and operate in compliance with all federal and provincial business
            requirements.
          </p>
          <p className="about-body">
            Over the years, we've grown from a small local operation to a trusted cleaning
            partner for hundreds of homes and businesses across the country. Our team of
            professionally trained cleaners is background-checked, bonded, and fully
            insured — because trust matters.
          </p>
          <p className="about-body">
            Whether you need a one-time deep clean or a recurring monthly service starting
            at $1,000 per room, we tailor every plan to your lifestyle and budget.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-text">Years in Business</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">500+</span>
              <span className="highlight-text">Clients Served</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5★</span>
              <span className="highlight-text">Average Rating</span>
            </div>
          </div>
        </div>

        <div className="about-values">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <div>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
