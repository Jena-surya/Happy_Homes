// import React from "react";
// import "./ServiceDetails.css";

// export const ServiceDetails = ({ title, heroImg, detailImg, description }) => {
//   return (
//     <div className="service-details">
//       {/* HERO SECTION */}
//       <div
//         className="service-hero"
//         style={{ backgroundImage: `url(${heroImg})` }}
//       >
//         <div className="overlay"></div>
//         <h1>{title}</h1>
//       </div>

//       {/* CONTENT */}
//       <div className="service-body">
//         <div className="service-container">
//           {/* IMAGE */}
//           <div className="service-image">
//             <img src={detailImg} alt={title} />
//           </div>

//           {/* TEXT */}
//           <div className="service-text">
//             <p>{description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./ServiceDetails.css";

export const ServiceDetails = ({ title, heroImg, detailImg, description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="service-details">
      {/* HERO */}
      <div
        className="service-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay"></div>
        <h1>{title}</h1>
      </div>

      {/* BODY */}
      <div className="service-body">
        <div className="service-container">
          {/* IMAGE */}
          <div className="service-image">
            <img src={detailImg} alt={title} />
          </div>

          {/* TEXT */}
          {/* <div className="service-text">
            <p>
              {readMore ? description : description.substring(0, 900) + "..."}
            </p>

            <button onClick={() => setReadMore(!readMore)} className="read-btn">
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div> */}
          <div className="service-text-wrapper">
            {/* SCROLL BOX */}
            <div className={`service-text ${readMore ? "expanded" : ""}`}>
              <p>{description}</p>
            </div>

            {/* BUTTON (OUTSIDE) */}
            <button onClick={() => setReadMore(!readMore)} className="read-btn">
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
