import "./Footer.css";

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-icon">✦</span>
            <span className="brand-name">Raj Cleaning Service</span>
          </div>
          <p className="footer-tagline">
            Professional cleaning solutions for Canadian homes and businesses.
            Registered, bonded, and insured.
          </p>
          <div className="footer-flag">🍁 Proudly Canadian</div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><button onClick={() => scrollTo("services")}>Residential Cleaning</button></li>
              <li><button onClick={() => scrollTo("services")}>Commercial Cleaning</button></li>
              <li><button onClick={() => scrollTo("services")}>Deep Cleaning</button></li>
              <li><button onClick={() => scrollTo("services")}>Monthly Plans</button></li>
              <li><button onClick={() => scrollTo("services")}>Window Cleaning</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><button onClick={() => scrollTo("about")}>About Us</button></li>
              <li><button onClick={() => scrollTo("pricing")}>Pricing</button></li>
              <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
              <li><button onClick={() => scrollTo("contact")}>Get a Quote</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+18005556789">1-800-555-6789</a></li>
              <li><a href="mailto:info@rajcleaningservice.ca">info@rajcleaningservice.ca</a></li>
              <li><span>Toronto, Ontario, Canada</span></li>
              <li><span>Mon–Sat: 8 AM – 7 PM EST</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Raj Cleaning Service. All rights reserved. Registered in Canada.</p>
          <p className="footer-legal">Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
}
