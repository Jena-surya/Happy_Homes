import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT - LOGO + TEXT */}
        <div className="footer-col">
          <img src="/images/logo.png" alt="logo" className="footer-logo" />

          <p>
            Happy Homes is a trusted construction company committed to
            delivering strong, reliable, and high-quality building solutions.
            With a focus on modern engineering, precise execution, and timely
            project completion, we transform ideas into durable structures that
            stand the test of time.
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <Link to="/" style={{ color: "#ccc" }}>
              <li>Home</li>
            </Link>
            <Link to="/about" style={{ color: "#ccc" }}>
              <li>About</li>
            </Link>
            <Link to="gallery" style={{ color: "#ccc" }}>
              <li>Gallery</li>
            </Link>
            <Link to="/pricing" style={{ color: "#ccc" }}>
              <li>Pricing</li>
            </Link>
            <Link to="/contact" style={{ color: "#ccc" }}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <Link to="/interior" style={{ color: "#ccc" }}>
              <li>Interior</li>
            </Link>
            <Link to="/construction" style={{ color: "#ccc" }}>
              <li>Construction</li>
            </Link>
            <Link to="/renovation" style={{ color: "#ccc" }}>
              <li>Renovation</li>
            </Link>
            <Link to="/maintenance" style={{ color: "#ccc" }}>
              <li>Maintenance</li>
            </Link>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <div className="info">
            <FaMapMarkerAlt />
            <p>
              House no 1, Lane Number 2, Adarsh Vihar, Aryapalli, Patia,
              Bhubaneswar, Odisha 751024
            </p>
          </div>

          <div className="info">
            <FaPhoneAlt />
            <p>+91 8000500844</p>
          </div>

          <div className="info">
            <FaEnvelope />
            <p>official@happyhomeservice.co.in</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          2026 © Copyright – All Rights Reserved Happy Homes Services. Developed By{" "}
          <a
            href="https://www.landminesoft.com"
            target="_blank"
            rel="noreferrer"
          >
            Landmine Soft
          </a>
        </p>
      </div>
    </footer>
  );
};
