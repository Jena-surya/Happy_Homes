// src/pages/Careers.jsx
import React, { useState } from "react";
import "./Careers.css";

export const Careers = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Registered Successfully 🚀");
  //   setOpen(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/careers/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error");

      alert("Registered Successfully 🚀");

      setForm({ name: "", email: "", college: "" });
      setOpen(false);
    } catch (err) {
      alert("Error ❌");
      console.error(err);
    }
  };

  return (
    <div className="careers-page">
      {/* CENTER CONTENT */}
      <div className="careers-box">
        <img
          src="/images/careerslogo.png"
          alt="Edge of Civil Academy"
          className="logo"
        />

        {/* <h1>Careers at Happy Homes</h1> */}
        <h1>Build Your Career with Happy Homes</h1>

        <p>
          In collaboration with Edge of Civil Academy, we offer real-world
          training, internships, and career opportunities to help you grow in
          the construction industry with practical experience.
        </p>

        <button onClick={() => setOpen(true)}>Register Now</button>
      </div>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                name="college"
                placeholder="Enter College"
                required
                onChange={handleChange}
              />

              <button type="submit">Submit</button>
            </form>

            <span className="close" onClick={() => setOpen(false)}>
              ✖
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
