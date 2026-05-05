// import React, { useState } from "react";
// import "./Nav.css";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export const Nav = () => {
//   const [active, setActive] = useState("Home");
//   const [open, setOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleClick = (item) => {
//     setActive(item);
//     setOpen(false);
//     setMobileOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* LOGO */}
//       <Link to="/">
//         <div className="logo">
//           <img src="/images/logo.png" alt="logo" />
//         </div>
//       </Link>

//       {/* HAMBURGER */}
//       <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
//         {mobileOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* MENU */}
//       <ul className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <li
//             className={active === "Home" ? "active" : ""}
//             onClick={() => handleClick("Home")}
//           >
//             Home
//           </li>
//         </Link>

//         {/* SERVICES */}
//         <li
//           className={`dropdown ${active === "Services" ? "active" : ""}`}
//           onClick={(e) => {
//             e.stopPropagation();
//             setActive("Services");
//             setOpen(!open);
//           }}
//         >
//           Services
//           <FaChevronDown className={`icon ${open ? "rotate" : ""}`} />
//           {open && (
//             <ul className="dropdown-menu">
//               <Link to="/construction">
//                 {" "}
//                 <li onClick={() => handleClick("Construction")}>
//                   Construction
//                 </li>
//               </Link>
//               <Link to="/renovation">
//                 <li onClick={() => handleClick("Renovation")}>Renovation</li>
//               </Link>
//               <Link to="/maintenance">
//                 <li onClick={() => handleClick("Maintenance")}>Maintenance</li>
//               </Link>
//               <Link to="interior">
//                 <li onClick={() => handleClick("Interior")}>Interior</li>
//               </Link>
//             </ul>
//           )}
//         </li>

//         <Link to="/pricing">
//           <li
//             className={active === "Pricing" ? "active" : ""}
//             onClick={() => handleClick("Pricing")}
//           >
//             Pricing
//           </li>
//         </Link>

//         <Link to="/gallery">
//           <li
//             className={active === "Gallery" ? "active" : ""}
//             onClick={() => handleClick("Gallery")}
//           >
//             Gallery
//           </li>
//         </Link>

//         <Link to="/about">
//           <li
//             className={active === "About" ? "active" : ""}
//             onClick={() => handleClick("About")}
//           >
//             About
//           </li>
//         </Link>

//         <Link to="/careers">
//           <li
//             className={active === "Careers" ? "active" : ""}
//             onClick={() => handleClick("Careers")}
//           >
//             Careers
//           </li>
//         </Link>

//         <Link to="/contact">
//           <li
//             className={active === "Contact" ? "active" : ""}
//             onClick={() => handleClick("Contact")}
//           >
//             Contact
//           </li>
//         </Link>

//         {/* <Link to="/login">
//           <li
//             className={active === "Login" ? "active" : ""}
//             onClick={() => handleClick("Login")}
//           >
//             <button
//               style={{
//                 padding: "7px",
//                 width: "90px",
//                 border: "none",
//                 borderRadius: "10px",
//                 backgroundColor: "yellow",
//               }}
//               className="login-btn"
//             >
//               Login
//             </button>
//           </li>
//         </Link> */}
//         <Link to="/login">
//           <li
//             className={`login-item ${active === "Login" ? "active" : ""}`}
//             onClick={() => handleClick("Login")}
//           >
//             <button
//               className="login-btn"
//               style={{
//                 padding: "7px",
//                 width: "90px",
//                 border: "none",
//                 borderRadius: "10px",
//                 backgroundColor: "yellow",
//               }}
//             >
//               Login
//             </button>
//           </li>
//         </Link>
//       </ul>
//     </nav>
//   );
// };

// import React, { useState, useEffect } from "react";
// import "./Nav.css";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export const Nav = () => {
//   const [active, setActive] = useState("Home");
//   const [open, setOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");
//   //   setIsLoggedIn(!!token);
//   // }, []);

//   useEffect(() => {
//     const checkLogin = () => {
//       const token = localStorage.getItem("token");
//       setIsLoggedIn(!!token);
//     };

//     checkLogin();

//     window.addEventListener("storage", checkLogin);

//     return () => window.removeEventListener("storage", checkLogin);
//   }, []);

//   const handleClick = (item) => {
//     setActive(item);
//     setOpen(false);
//     setMobileOpen(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/";
//   };

//   return (
//     <nav className="navbar">
//       {/* LOGO */}
//       <Link to="/">
//         <div className="logo">
//           <img src="/images/logo.png" alt="logo" />
//         </div>
//       </Link>

//       {/* HAMBURGER */}
//       <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
//         {mobileOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* MENU */}
//       <ul className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}>
//         <Link to="/">
//           <li onClick={() => handleClick("Home")}>Home</li>
//         </Link>

//         {/* SERVICES */}
//         <li
//           className="dropdown"
//           onClick={(e) => {
//             e.stopPropagation();
//             setOpen(!open);
//           }}
//         >
//           Services
//           <FaChevronDown className={`icon ${open ? "rotate" : ""}`} />
//           {open && (
//             <ul className="dropdown-menu">
//               <Link to="/construction">
//                 <li>Construction</li>
//               </Link>
//               <Link to="/renovation">
//                 <li>Renovation</li>
//               </Link>
//               <Link to="/maintenance">
//                 <li>Maintenance</li>
//               </Link>
//               <Link to="/interior">
//                 <li>Interior</li>
//               </Link>
//             </ul>
//           )}
//         </li>

//         <Link to="/pricing">
//           <li>Pricing</li>
//         </Link>
//         <Link to="/gallery">
//           <li>Gallery</li>
//         </Link>
//         <Link to="/about">
//           <li>About</li>
//         </Link>
//         <Link to="/careers">
//           <li>Careers</li>
//         </Link>
//         <Link to="/contact">
//           <li>Contact</li>
//         </Link>

//         {/* 🔥 LOGIN / ADMIN SWITCH */}
//         {isLoggedIn ? (
//           <>
//             <Link to="/admin">
//               <li>Admin</li>
//             </Link>

//             <li
//               onClick={handleLogout}
//               style={{ cursor: "pointer", color: "yellow" }}
//             >
//               Logout
//             </li>
//           </>
//         ) : (
//           <Link to="/login">
//             <li className="login-item">
//               <button
//                 className="login-btn"
//                 style={{
//                   padding: "7px",
//                   width: "90px",
//                   border: "none",
//                   borderRadius: "10px",
//                   backgroundColor: "yellow",
//                   cursor: "pointer",
//                 }}
//               >
//                 Login
//               </button>
//             </li>
//           </Link>
//         )}
//       </ul>
//     </nav>
//   );
// };

import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 initial check
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();

  // 🔥 listen for login/logout changes
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleClick = (item) => {
    setActive(item);
    setOpen(false);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    // 🔥 update navbar instantly
    window.dispatchEvent(new Event("storage"));

    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
      </Link>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MENU */}
      <ul className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}>
        <Link to="/">
          <li onClick={() => handleClick("Home")}>Home</li>
        </Link>

        {/* SERVICES */}
        <li
          className="dropdown"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          Services
          <FaChevronDown className={`icon ${open ? "rotate" : ""}`} />
          {open && (
            <ul className="dropdown-menu">
              <Link to="/construction">
                <li onClick={() => handleClick("Construction")}>
                  Construction
                </li>
              </Link>
              <Link to="/renovation">
                <li onClick={() => handleClick("Renovation")}>Renovation</li>
              </Link>
              <Link to="/maintenance">
                <li onClick={() => handleClick("Maintenance")}>Maintenance</li>
              </Link>
              <Link to="/interior">
                <li onClick={() => handleClick("Interior")}>Interior</li>
              </Link>
            </ul>
          )}
        </li>

        <Link to="/pricing">
          <li onClick={() => handleClick("Pricing")}>Pricing</li>
        </Link>

        <Link to="/gallery">
          <li onClick={() => handleClick("Gallery")}>Gallery</li>
        </Link>

        <Link to="/about">
          <li onClick={() => handleClick("About")}>About</li>
        </Link>

        <Link to="/careers">
          <li onClick={() => handleClick("Careers")}>Careers</li>
        </Link>

        <Link to="/contact">
          <li onClick={() => handleClick("Contact")}>Contact</li>
        </Link>

        {/* 🔥 LOGIN / ADMIN SWITCH */}
        {isLoggedIn ? (
          <>
            <Link to="/admin">
              <li onClick={() => handleClick("Admin")}>Admin</li>
            </Link>

            {/* <li
              onClick={handleLogout}
              style={{ cursor: "pointer", color: "yellow" }}
            >
              Logout
            </li> */}

            <li className="login-item">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <Link to="/login">
            <li className="login-item">
              <button className="login-btn">Login</button>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};
