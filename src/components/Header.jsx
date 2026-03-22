import { Link } from "react-router-dom";
import { useState } from "react";
import ironcutLogo from "../assets/logo_transparente.png";

function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen((current) => !current);
  }

  return (
    <header className="header">
      <div className="header-container">
        <button
          type="button"
          className="menu-btn"
          onClick={toggleMenu}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={ironcutLogo} alt="IronCut Barber logo" className="logo-icon" />
          <span>IronCut Barber</span>
        </Link>

        <nav id="mobile-navigation" className={`nav ${open ? "open" : ""}`}>
          <button
            type="button"
            className="nav-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            X
          </button>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/booking" className="cta" onClick={closeMenu}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
