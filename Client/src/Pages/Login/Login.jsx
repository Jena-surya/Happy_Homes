// // src/pages/Login.jsx
// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     alert("Login Successful 🚀");
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <h2>Login</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             required
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             required
//             onChange={handleChange}
//           />

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await fetch("http://localhost:8089/api/admin/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       // const data = await res.json();
//       if (!res.ok) {
//         throw new Error("Login failed");
//       }

//       const data = await res.json();

//       if (data.status === "success") {
//         localStorage.setItem("token", data.token);

//         alert("Login Successful ✅");

//         navigate("/admin"); // 🔥 redirect
//       } else {
//         alert("Invalid Email or Password ❌");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ marginTop: "100px", textAlign: "center" }}>
//       <h2>Admin Login</h2>

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <br />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8089/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);

        // 🔥 YAHI ADD KARNA HAI
        window.dispatchEvent(new Event("storage"));

        alert("Login Successful ✅");

        navigate("/admin");
      } else {
        alert("Invalid Email or Password ❌");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {/* 🔥 LOGO */}
        <img src="/images/logo.png" alt="logo" className="logo" />

        <h2>Login</h2>

        <p className="subtitle">Welcome back 👋</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {/* <p className="footer-text">© 2026 Happy Homes</p> */}
        <p className="footer-text">
          Don't have an account ? contact: official@happyhomeservice.co.in
        </p>
      </div>
    </div>
  );
};

export default Login;
