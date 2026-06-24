import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      {/* HERO */}
      <div className="about-hero">
        <div className="overlay"></div>
        <h1>About Happy Homes</h1>
      </div>

      {/* INTRO */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Happy Homes is a trusted construction and interior solutions
              company committed to delivering high-quality services with
              precision and professionalism. We specialize in construction,
              renovation, maintenance, and interior design, helping clients
              transform their ideas into reality.
            </p>
            <p>
              With years of experience in the industry, we have successfully
              completed numerous residential and commercial projects, earning
              the trust of our clients through quality work and timely delivery.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/about2.jpg" alt="about" />
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="about-section light">
        <h2 className="center">Why Choose Us</h2>

        <div className="features">
          <div className="feature">
            <h3>✔ Quality Work</h3>
            <p>
              We focus on delivering top-quality work using the best materials
              and modern techniques to ensure durability and perfection.
            </p>
          </div>

          <div className="feature">
            <h3>✔ Experienced Team</h3>
            <p>
              Our team consists of skilled professionals, engineers, and
              designers with years of industry experience.
            </p>
          </div>

          <div className="feature">
            <h3>✔ On-Time Delivery</h3>
            <p>
              We value your time and ensure that every project is completed
              within the promised timeline.
            </p>
          </div>

          <div className="feature">
            <h3>✔ Customer Satisfaction</h3>
            <p>
              Client satisfaction is our priority. We work closely with our
              clients to meet their expectations.
            </p>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="about-section">
        <div className="about-content reverse">
          <div className="about-image">
            <img src="/images/about1.jpg" alt="experience" />
          </div>

          <div className="about-text">
            <h2>Our Experience</h2>
            <p>
              We have successfully completed a wide range of projects including
              residential homes, commercial spaces, renovations, and interior
              designs. Our expertise allows us to handle projects of all sizes
              with confidence and efficiency.
            </p>
            <p>
              From planning to execution, we ensure every detail is handled with
              care and professionalism. Our goal is to create spaces that are
              not only functional but also visually appealing.
            </p>
          </div>
        </div>
      </div>

     {/* LEADERSHIP TEAM */}
<div className="about-section light">
  <h2 className="center">Leadership Team</h2>

  {/* Founder */}
  <div className="founder-card">
    <img src="/images/founder.jpg" alt="Founder" />

    <div className="founder-content">
      <h3>Pritam kumar jena</h3>
      <h4>Founder</h4>

      <p>
        As the Founder of Happy Home Services,pritam
        leads the company with a vision of delivering high-quality
        construction, renovation, interior, and maintenance solutions.
        His commitment to innovation, customer satisfaction, and quality
        workmanship drives the company's continued growth and success.
      </p>
    </div>
  </div>

  {/* Co-Founder*/}
  <div className="team-cards">

    <div className="team-card">
      <img src="/images/cofounder.jpg" alt="Co-Founder" />
      <h3>Amitav Mohanty</h3>
      <h4>Co-Founder</h4>

      <p>
        Oversees business operations, project planning, and client
        relationship management to ensure seamless project execution.
      </p>
    </div>

    <div className="team-card">
      <img src="/images/partner.jpg" alt="Partner" />
      <h3>Partha sarathi jena </h3>
      <h4>Business Partner</h4>

      <p>
        Contributes to strategic growth, partnerships, and operational
        excellence while supporting the company's long-term vision.
      </p>
    </div>

  </div>
</di
  v>
  );
};
