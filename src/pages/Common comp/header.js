import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true); // New state to check if at the top
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
      // Show the header when scrolling up and hide it when scrolling down
      setIsAtTop(currentScrollY === 0); // Set isAtTop based on scroll position
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light ${visible ? 'visible' : 'hidden'}`} id="ftco-navbar" style={{ backgroundColor: visible===false ? 'transparent' : isAtTop ? 'transparent' : '#333333',}}>
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span className="flaticon-scissors-in-a-hair-salon-badge"></span>Haircare
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${activeItem === "Home" ? "active" : ""}`}>
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className={`nav-item ${activeItem === "Services" ? "active" : ""}`}>
                <Link to='/services' className="nav-link">Services</Link>
              </li>
              <li className={`nav-item ${activeItem === "Gallery" ? "active" : ""}`}>
                <Link to='/gallery' className="nav-link">Gallery</Link>
              </li>
              <li className={`nav-item ${activeItem === "About" ? "active" : ""}`}>
                <Link to='/about' className="nav-link">About</Link>
              </li>
              <li className={`nav-item ${activeItem === "Booking" ? "active" : ""}`}>
                <Link to='/booking' className="nav-link">Booking</Link>
              </li>
              <li className={`nav-item ${activeItem === "Contact" ? "active" : ""}`}>
                <Link to='/contactus' className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}