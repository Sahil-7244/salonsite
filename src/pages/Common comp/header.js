import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for menu open/close

  const location = window.location.pathname;

  useEffect(() => {
    switch (location) {
      case "/":
        setActiveItem("Home");
        break;
      case "/services":
        setActiveItem("Services");
        break;
      case "/gallery":
        setActiveItem("Gallery");
        break;
      case "/about":
        setActiveItem("About");
        break;
      case "/booking":
        setActiveItem("Booking");
        break;
      case "/contactus":
        setActiveItem("Contact");
        break;
      default:
        setActiveItem("");
        break;
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light ${visible ? 'visible' : 'hidden'}`} style={{ backgroundColor: !visible ? 'transparent' : isAtTop ? 'transparent' : '#333333' }}>
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span className="flaticon-scissors-in-a-hair-salon-badge"></span>Haircare
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="ftco-nav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${activeItem === "Home" ? "active" : ""}`}>
                <Link to='/' className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className={`nav-item ${activeItem === "Services" ? "active" : ""}`}>
                <Link to='/services' className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </li>
              <li className={`nav-item ${activeItem === "Gallery" ? "active" : ""}`}>
                <Link to='/gallery' className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              </li>
              <li className={`nav-item ${activeItem === "About" ? "active" : ""}`}>
                <Link to='/about' className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li className={`nav-item ${activeItem === "Booking" ? "active" : ""}`}>
                <Link to='/booking' className="nav-link" onClick={() => setIsMenuOpen(false)}>Booking</Link>
              </li>
              <li className={`nav-item ${activeItem === "Contact" ? "active" : ""}`}>
                <Link to='/contactus' className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
