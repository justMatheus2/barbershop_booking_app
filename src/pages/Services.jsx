import { Link } from "react-router-dom";
import servicesData from "../data/services";

function Services() {
  return (
    <section className="content-section">
      <div className="section-head">
        <p className="eyebrow">Premium services</p>
        <h1>Service options designed for sharp style and consistency.</h1>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <article key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.duration} min</p>
            <strong>€{service.price}</strong>
          </article>
        ))}
      </div>

      <div className="inline-cta">
        <p>Not sure which service suits you best? Book in and we will tailor it on the day.</p>
        <Link to="/booking" className="btn btn-primary">
          Go to booking
        </Link>
      </div>
    </section>
  );
}

export default Services;
