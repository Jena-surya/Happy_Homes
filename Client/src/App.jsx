// import { Nav } from "./Components/Navbar/Nav";
// import { Home } from "./Pages/Home";
// import { MaintenancePage } from "./Pages/MaintenancePage";
// import { InteriorPage } from "./Pages/InteriorPage";
// import { RenovationPage } from "./Pages/RenovationPage";
// import { ConstructionPage } from "./Pages/ConstructionPage";
// import { About } from "./Pages/About/About";
// import { Contact } from "./Pages/Contact/Contact";
// import { Footer } from "./Components/Footer/Footer";
// import { Gallery } from "./Pages/Gallery/Gallery";
// import { PricingPage } from "./Pages/Pricing/PricingPage";
// import { Careers } from "./Pages/Careers/Careers";
// import Login from "./Pages/Login/Login";

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// /* 🔥 Admin Dashboard */
// const AdminDashboard = () => {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8089/api/admin/dashboard", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     })
//       .then((res) => res.text())
//       .then((data) => setData(data))
//       .catch(() => setData("Unauthorized ❌"));
//   }, []);

//   return (
//     <div style={{ marginTop: "100px", textAlign: "center" }}>
//       <h1>🔥 Admin Panel</h1>
//       <p>{data}</p>
//     </div>
//   );
// };

// /* 🔥 Protected Route */
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <>
//       <Nav />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/maintenance" element={<MaintenancePage />} />
//         <Route path="/interior" element={<InteriorPage />} />
//         <Route path="/renovation" element={<RenovationPage />} />
//         <Route path="/construction" element={<ConstructionPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/login" element={<Login />} />

//         {/* 🔥 ADMIN ROUTE */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>

//       <Footer />
//     </>
//   );
// };

// export default App;

import { Nav } from "./Components/Navbar/Nav";
import { Home } from "./Pages/Home";
import { MaintenancePage } from "./Pages/MaintenancePage";
import { InteriorPage } from "./Pages/InteriorPage";
import { RenovationPage } from "./Pages/RenovationPage";
import { ConstructionPage } from "./Pages/ConstructionPage";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Gallery } from "./Pages/Gallery/Gallery";
import { PricingPage } from "./Pages/Pricing/PricingPage";
import { Careers } from "./Pages/Careers/Careers";
import Login from "./Pages/Login/Login";
import ScrollToTop from "./Components/ScrollToTop";

import { AdminDashboard } from "./Pages/Admin/AdminDashboard";

import { Routes, Route, Navigate } from "react-router-dom";

/* 🔥 Protected Route */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
  <ScrollToTop />

  <Nav />

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/interior" element={<InteriorPage />} />
        <Route path="/renovation" element={<RenovationPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />

        {/* 🔥 ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
