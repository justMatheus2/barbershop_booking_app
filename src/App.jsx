import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/services.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/booking.css";
import "./styles/booking-form.css";
import "./styles/header.css";

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <section>
          <p>(c) {new Date().getFullYear()} IronCut Barber, Cork. Quality cuts, no fuss.</p>
        </section>
      </footer>
    </div>
  );
}

export default App;
