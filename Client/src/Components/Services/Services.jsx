// import React from "react";
// import "./Services.css";

// export const Services = () => {
//   return (
//     <div className="services">
//       {/* SECTION 1 */}
//       <div className="service-section">
//         <h2>Maintenance</h2>
//         <div className="service-content">
//           <img src="/images/maintenance2.jpg" alt="" />
//           <div className="text">
//             <p>
//               We provide top-quality maintenance services to keep your property
//               in excellent condition. From plumbing and electrical fixes to
//               regular upkeep, our team ensures everything runs smoothly.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* SECTION 2 (REVERSE) */}
//       <div className="service-section">
//         <h2>Renovation</h2>
//         <div className="service-content reverse">
//           <img src="/images/renovation2.jpg" alt="" />
//           <div className="text">
//             <p>
//               Transform your space with our expert renovation services. Whether
//               it’s a complete home makeover or a single room upgrade, we deliver
//               modern and stylish solutions.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* SECTION 3 */}
//       <div className="service-section">
//         <h2>Interior</h2>
//         <div className="service-content">
//           <img src="/images/interior2.jpg" alt="" />
//           <div className="text">
//             <p>
//               Our interior design services combine creativity and functionality.
//               We create beautiful living spaces tailored to your taste and
//               lifestyle.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* SECTION 4 (REVERSE) */}
//       <div className="service-section">
//         <h2>Construction</h2>
//         <div className="service-content reverse">
//           <img src="/images/construction2.jpg" alt="" />
//           <div className="text">
//             <p>
//               From planning to execution, our construction services ensure
//               durable and high-quality structures. We build with precision,
//               safety, and modern techniques.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <div className="services">
      {/* SECTION 1 */}
      <div className="service-section">
        <h2>Maintenance</h2>
        <div className="service-content">
          <img src="/images/maintenance2.jpg" alt="" />
          <div className="text">
            <p>
              We provide comprehensive maintenance services designed to keep
              your property in perfect condition all year round. Our skilled
              professionals handle everything from plumbing and electrical work
              to painting, repairs, and routine inspections. We focus on
              delivering quick, reliable, and cost-effective solutions so you
              can enjoy a hassle-free living or working environment without
              worrying about unexpected issues.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="service-section">
        <h2>Renovation</h2>
        <div className="service-content reverse">
          <img src="/images/renovation2.jpg" alt="" />
          <div className="text">
            <p>
              Our renovation services are crafted to transform your existing
              space into something modern, stylish, and functional. Whether you
              want to upgrade a single room or completely redesign your home or
              office, we ensure high-quality materials and expert craftsmanship.
              From planning and design to execution, we bring your vision to
              life while maintaining timelines and budgets efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="service-section">
        <h2>Interior</h2>
        <div className="service-content">
          <img src="/images/interior2.jpg" alt="" />
          <div className="text">
            <p>
              We specialize in creating interiors that reflect your personality
              and lifestyle. Our interior design services combine creativity
              with functionality to deliver elegant and comfortable spaces. From
              furniture selection and lighting to color schemes and layout
              planning, we focus on every detail to ensure your space looks
              visually appealing while remaining highly practical.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="service-section">
        <h2>Construction</h2>
        <div className="service-content reverse">
          <img src="/images/construction2.jpg" alt="" />
          <div className="text">
            <p>
              Our construction services are built on a foundation of quality,
              safety, and trust. From residential buildings to commercial
              projects, we handle everything from planning and design to final
              execution. Using modern techniques and high-grade materials, we
              ensure durable and long-lasting structures that meet industry
              standards while exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
