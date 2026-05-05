import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted!");
//   };

//   return (
//     <div className="contact">
//       {/* 🔥 HERO SECTION */}
//       <div
//         className="contact-hero"
//         style={{ backgroundImage: `url("/images/contact-hero.jpg")` }}
//       >
//         <div className="overlay"></div>
//         <h1>Contact</h1>
//       </div>

//       <div className="contact-container">
//         {/* LEFT SIDE */}
//         <div className="contact-left">
//           <h2>Enquiry Now</h2>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number"
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="5"
//               onChange={handleChange}
//               required
//             ></textarea>

//             <button type="submit">Submit</button>
//           </form>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="contact-right">
//           <h2>Contact Details</h2>

//           <div className="info">
//             <FaMapMarkerAlt className="icon" />
//             <p>123, Happy Homes Street, Mumbai, India</p>
//           </div>

//           <div className="info">
//             <FaPhoneAlt className="icon" />
//             <p>+91 9876543210</p>
//           </div>

//           <div className="info">
//             <FaEnvelope className="icon" />
//             <p>support@happyhomes.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Form Submitted!");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8089/api/contact/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      alert("Submitted Successfully ✅");

      setForm({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch {
      alert("Error ❌");
    }
  };

  return (
    <>
      {/* 🔥 HERO OUTSIDE */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url("/images/contact-hero.jpg")` }}
      >
        <div className="overlay"></div>
        <h1 style={{ marginTop: "70px" }}>Contact</h1>
      </div>

      {/* बाकी content */}
      <div className="contact">
        <div className="contact-container">
          <div className="contact-left">
            <h2>Enquiry Now</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div
            className="contact-right"
            style={{
              backgroundImage: `url("/images/contact3.jpg")`,
              padding: "40px",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <h2>Contact Details</h2>

            <div
              className="info"
              style={{
                backgroundColor: "#2d302d",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              <FaMapMarkerAlt className="icon" />
              <p>
                {" "}
                House no 1, Lane Number 2, Adarsh Vihar, Aryapalli, Patia,
                Bhubaneswar, Odisha 751024
              </p>
            </div>

            <div
              className="info"
              style={{
                backgroundColor: "#2d302d",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              <FaPhoneAlt className="icon" />
              <p>+91 8000500844</p>
            </div>

            <div
              className="info"
              style={{
                backgroundColor: "#2d302d",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              <FaEnvelope className="icon" />
              <p>support@happyhomes.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
