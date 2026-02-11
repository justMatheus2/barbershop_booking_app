import { Link } from "react-router-dom";

const highlights = [
  { title: "12+ years", text: "of premium grooming experience" },
  { title: "4.9/5", text: "average from 400+ client reviews" },
  { title: "7 days", text: "flexible bookings with quick confirmation" },
];

const steps = [
  "Pick the services that suit your style",
  "Choose a day and time that works for you",
  "Confirm in seconds and get your booking summary",
];

const testimonials = [
  {
    name: "Conor B.",
    text: "Best barber experience I have had in Cork. Booking online was dead handy and the service was top class.",
  },
  {
    name: "Darragh K.",
    text: "Booked in under two minutes and was seen right on time. Great attention to detail and a proper professional finish.",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Premium barbershop in Cork</p>
        <h1>A complete landing page built to attract, convert, and retain clients.</h1>
        <p className="hero-copy">
          IronCut blends classic barbering technique with modern style to deliver
          a sharp, consistent experience. Use our booking system to lock in your
          next appointment in just a few clicks.
        </p>

        <div className="hero-actions">
          <Link to="/booking" className="btn btn-primary">
            Book now
          </Link>
          <Link to="/services" className="btn btn-secondary">
            View services
          </Link>
        </div>

        <div className="hero-highlights">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Simple process, professional result.</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step} className="step-card">
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">Client feedback</p>
          <h2>Trusted by locals who come back every month.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <p>“{testimonial.text}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready for a fresh cut?</h2>
        <p>Choose your preferred time and confirm your appointment in minutes.</p>
        <Link to="/booking" className="btn btn-primary">
          Reserve my slot
        </Link>
      </section>
    </>
  );
}

export default Home;
