import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    rooms: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get Your Free Quote Today</h2>
          <p className="contact-desc">
            Ready for a cleaner home or office? Fill out the form and we'll get back to
            you within one business day with a custom quote.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-item-icon">📞</span>
              <div>
                <span className="contact-item-label">Phone</span>
                <a className="contact-item-value" href="tel:+18005556789">1-800-555-6789</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">✉️</span>
              <div>
                <span className="contact-item-label">Email</span>
                <a className="contact-item-value" href="mailto:info@rajcleaningservice.ca">
                  info@rajcleaningservice.ca
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">📍</span>
              <div>
                <span className="contact-item-label">Registered Office</span>
                <span className="contact-item-value">Toronto, Ontario, Canada</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">🕐</span>
              <div>
                <span className="contact-item-label">Business Hours</span>
                <span className="contact-item-value">Mon – Sat, 8:00 AM – 7:00 PM (EST)</span>
              </div>
            </div>
          </div>

          <div className="coverage-badge">
            <span>🍁</span>
            <span>Serving clients across Canada — Ontario, BC, Alberta, Quebec &amp; more</span>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Request Received!</h3>
              <p>
                Thank you for reaching out. A member of the Raj Cleaning Service team will
                contact you within one business day.
              </p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>
                Send Another Request
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.ca"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (416) 555-0100"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="monthly">Monthly Room Service</option>
                    <option value="window">Window Cleaning</option>
                    <option value="postconstruction">Post-Construction</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="rooms">Number of Rooms</label>
                <select
                  id="rooms"
                  name="rooms"
                  value={form.rooms}
                  onChange={handleChange}
                >
                  <option value="">Select room count</option>
                  <option value="1">1 room — from $1,000/month</option>
                  <option value="2">2 rooms — from $1,900/month</option>
                  <option value="3">3 rooms — from $2,800/month</option>
                  <option value="4">4 rooms — from $3,700/month</option>
                  <option value="5+">5+ rooms — custom quote</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your space, preferred schedule, or any special requirements..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                Request My Free Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
