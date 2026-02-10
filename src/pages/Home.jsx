import { Link } from "react-router-dom";

function Home() {
  return (
    <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        IronCut Barber
      </h1>

      <p style={{ maxWidth: "500px", margin: "0 auto 2rem" }}>
        Precision cuts, classic techniques and modern style.
        Book your appointment online in seconds.
      </p>

      <Link to="/booking">
        <button>Book an Appointment</button>
      </Link>
    </section>
  );
}

export default Home;



