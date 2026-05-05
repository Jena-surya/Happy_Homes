import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <h1>
          WELCOME to HAPPY HOMES <br /> CONSTRUCTION
        </h1>

        <p>
          Your Smart Partner in Maintenance, Renovation, Construction & Interior
          Services
        </p>

        {/* CARDS */}
        <div className="cards">
          <Link to="/maintenance">
            <div className="card">
              <img src="/images/maintenance.jpg" alt="" />
              <span>Maintenance</span>
            </div>
          </Link>

          <Link to="/renovation">
            <div className="card">
              <img src="/images/renovation.jpg" alt="" />
              <span>Renovation</span>
            </div>
          </Link>

          <Link to="/interior">
            <div className="card">
              <img src="/images/interior.jpg" alt="" />
              <span>Interior</span>
            </div>
          </Link>

          {/* 🔥 EXTRA CARD (Construction) */}
          <Link to="/construction">
            <div className="card">
              <img src="/images/construction.jpg" alt="" />
              <span>Construction</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
