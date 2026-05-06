// import React, { useState } from "react";
// import "./PricingPage.css";
// import { FaCalculator, FaDownload, FaWhatsapp } from "react-icons/fa";

// export const PricingPage = () => {
//   const [area, setArea] = useState(1000);

//   const basePrice = 20;
//   const multiplier = 1.5;

//   const subtotal = area * basePrice * multiplier;
//   const gst = subtotal * 0.18;
//   const total = subtotal + gst;

//   return (
//     <>
//       <div className="pricing-hero">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>PRICING CALCULATOR</h1>
//           <p>
//             Enter your requirements below to calculate the estimated cost for
//             your project.
//           </p>
//         </div>
//       </div>
//       <div className="pricing">
//         {/* HERO */}
//         {/* <div className="pricing-hero">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>PRICING CALCULATOR</h1>
//           <p>
//             Enter your requirements below to calculate the estimated cost for
//             your project.
//           </p>
//         </div>
//       </div> */}

//         <div className="pricing-wrapper">
//           {/* LEFT SIDE */}
//           <div className="left">
//             {/* STEP 1 */}
//             <div className="box">
//               <h3>
//                 <span>1</span> SELECT SERVICE DETAILS
//               </h3>

//               <div className="grid">
//                 <div>
//                   <label>Category</label>
//                   <select>
//                     <option>Interior</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Service</label>
//                   <select>
//                     <option>Painting</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Material Type</label>
//                   <select>
//                     <option>Premium</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Area (sq ft)</label>
//                   <input
//                     value={area}
//                     onChange={(e) => setArea(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <button className="calc-btn">
//                 <FaCalculator /> CALCULATE PRICE
//               </button>
//             </div>

//             {/* STEP 2 TABLE */}
//             {/* <div className="box">
//             <h3>
//               <span>2</span> PRICING TABLE
//             </h3>

//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>SERVICE NAME</th>
//                   <th>CATEGORY</th>
//                   <th>UNIT</th>
//                   <th>BASE PRICE (₹)</th>
//                   <th>MATERIAL TYPE</th>
//                   <th>MULTIPLIER</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Painting</td>
//                   <td>Interior</td>
//                   <td>sq ft</td>
//                   <td>20</td>
//                   <td>Basic</td>
//                   <td>1.0</td>
//                 </tr>
//                 <tr className="highlight-row">
//                   <td>Painting</td>
//                   <td>Interior</td>
//                   <td>sq ft</td>
//                   <td>20</td>
//                   <td>Premium</td>
//                   <td>1.5</td>
//                 </tr>
//                 <tr>
//                   <td>Painting</td>
//                   <td>Interior</td>
//                   <td>sq ft</td>
//                   <td>20</td>
//                   <td>Luxury</td>
//                   <td>2.2</td>
//                 </tr>
//                 <tr>
//                   <td>Flooring</td>
//                   <td>Renovation</td>
//                   <td>sq ft</td>
//                   <td>50</td>
//                   <td>Tiles</td>
//                   <td>1.0</td>
//                 </tr>
//                 <tr>
//                   <td>Flooring</td>
//                   <td>Renovation</td>
//                   <td>sq ft</td>
//                   <td>50</td>
//                   <td>Marble</td>
//                   <td>2.0</td>
//                 </tr>
//                 <tr>
//                   <td>Plastering</td>
//                   <td>Construction</td>
//                   <td>sq ft</td>
//                   <td>25</td>
//                   <td>Standard</td>
//                   <td>1.0</td>
//                 </tr>
//                 <tr>
//                   <td>Plastering</td>
//                   <td>Construction</td>
//                   <td>sq ft</td>
//                   <td>25</td>
//                   <td>Premium</td>
//                   <td>1.3</td>
//                 </tr>
//                 <tr>
//                   <td>Electrical Work</td>
//                   <td>Maintenance</td>
//                   <td>sq ft</td>
//                   <td>15</td>
//                   <td>Standard</td>
//                   <td>1.0</td>
//                 </tr>
//               </tbody>
//             </table>

//             <p className="note">
//               Note: Prices are subject to change. Minimum charges may apply for
//               small projects.
//             </p>
//           </div> */}

//             {/* STEP 3 */}
//             {/* <div className="box">
//             <h3>
//               <span>3</span> HOW IT'S CALCULATED
//             </h3>

//             <div className="calc-row">
//               <div className="calc-box">{area} sq ft</div>
//               <span>×</span>
//               <div className="calc-box">₹{basePrice}</div>
//               <span>×</span>
//               <div className="calc-box">{multiplier}</div>
//               <span>=</span>
//               <div className="total-box">₹{subtotal}</div>
//             </div>

//             <p className="formula">
//               Final Price = Area × Base Price × Multiplier <br />₹{subtotal} +
//               18% GST = ₹{total}
//             </p>
//           </div> */}

//             {/* STEP 3 */}
//             <div className="box">
//               <h3>
//                 <span>3</span> HOW IT'S CALCULATED
//               </h3>

//               <div className="calc-row">
//                 {/* LEFT GROUP */}
//                 <div className="group">
//                   <div className="calc-box">{area} sq ft</div>
//                   <span>×</span>
//                   <div className="calc-box">₹{basePrice}</div>
//                   <span>×</span>
//                   <div className="calc-box">{multiplier}</div>
//                 </div>

//                 {/* RIGHT RESULT */}
//                 <div className="result">
//                   <span>=</span>
//                   <div className="total-box">₹{subtotal}</div>
//                 </div>
//               </div>

//               <p className="formula">
//                 Final Price = Area × Base Price × Multiplier <br />₹{subtotal} +
//                 18% GST = ₹{total}
//               </p>
//             </div>
//             {/* NOTES */}
//             <div className="notes">
//               <div>
//                 <h4>IMPORTANT NOTES</h4>
//                 <ul>
//                   <li>Minimum project cost: ₹10,000</li>
//                   <li>Price includes labor and material charges</li>
//                   <li>GST will be added as per government norms</li>
//                   <li>Final price may vary based on site conditions</li>
//                 </ul>
//               </div>

//               <img src="/images/construction2.jpg" alt="pricing" />
//             </div>

//             {/* CTA */}
//             <div className="cta">
//               <div>
//                 <h4>NEED A CUSTOM QUOTE?</h4>
//                 <p>Contact us for complex projects or bulk requirements.</p>
//               </div>
//               <button>CONTACT US</button>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="right">
//             <div className="summary">
//               <h3>COST SUMMARY</h3>

//               <p>
//                 <b>Service</b>
//                 <br />
//                 Painting
//               </p>
//               <p>
//                 <b>Category</b>
//                 <br />
//                 Interior
//               </p>
//               <p>
//                 <b>Material</b>
//                 <br />
//                 Premium
//               </p>
//               <p>
//                 <b>Area</b>
//                 <br />
//                 {area} sq ft
//               </p>

//               <hr />

//               <p>
//                 <b>Base Price</b>
//                 <br />₹{basePrice} / sq ft
//               </p>
//               <p>
//                 <b>Multiplier</b>
//                 <br />
//                 {multiplier}
//               </p>

//               <hr />

//               <p>
//                 <b>Subtotal</b>
//                 <br />₹{subtotal}
//               </p>
//               <p>GST (18%) ₹{gst}</p>

//               <h2>₹{total}</h2>

//               <button className="pdf">
//                 <FaDownload /> DOWNLOAD PDF
//               </button>
//               <button className="wa">
//                 <FaWhatsapp /> SHARE VIA WHATSAPP
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState } from "react";
// import "./PricingPage.css";
// import { FaCalculator, FaDownload, FaWhatsapp } from "react-icons/fa";

// export const PricingPage = () => {
//   const [area, setArea] = useState(1000);

//   // 🔥 NEW STATES
//   const [category, setCategory] = useState("Interior");
//   const [service, setService] = useState("Painting");
//   const [material, setMaterial] = useState("Premium");

//   const [basePrice, setBasePrice] = useState(0);
//   const [multiplier, setMultiplier] = useState(0);

//   // 🔥 API CALL
//   const fetchPrice = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:8089/api/pricing/calculate?category=${category}&service=${service}&material=${material}`,
//       );

//       const data = await res.json();

//       setBasePrice(data.basePrice);
//       setMultiplier(data.multiplier);
//     } catch (err) {
//       console.error("Error fetching price", err);
//     }
//   };

//   // 🔥 CALCULATIONS
//   const subtotal = area * basePrice * multiplier;
//   const gst = subtotal * 0.18;
//   const total = subtotal + gst;

//   return (
//     <>
//       <div className="pricing-hero">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>PRICING CALCULATOR</h1>
//           <p>
//             Enter your requirements below to calculate the estimated cost for
//             your project.
//           </p>
//         </div>
//       </div>

//       <div className="pricing">
//         <div className="pricing-wrapper">
//           {/* LEFT SIDE */}
//           <div className="left">
//             {/* STEP 1 */}
//             <div className="box">
//               <h3>
//                 <span>1</span> SELECT SERVICE DETAILS
//               </h3>

//               <div className="grid">
//                 <div>
//                   <label>Category</label>
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                   >
//                     <option>Interior</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Service</label>
//                   <select
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                   >
//                     <option>Painting</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Material Type</label>
//                   <select
//                     value={material}
//                     onChange={(e) => setMaterial(e.target.value)}
//                   >
//                     <option>Premium</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label>Area (sq ft)</label>
//                   <input
//                     value={area}
//                     onChange={(e) => setArea(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* 🔥 BUTTON CALL */}
//               <button className="calc-btn" onClick={fetchPrice}>
//                 <FaCalculator /> CALCULATE PRICE
//               </button>
//             </div>

//             {/* STEP 3 */}
//             <div className="box">
//               <h3>
//                 <span>3</span> HOW IT'S CALCULATED
//               </h3>

//               <div className="calc-row">
//                 <div className="group">
//                   <div className="calc-box">{area} sq ft</div>
//                   <span>×</span>
//                   <div className="calc-box">₹{basePrice}</div>
//                   <span>×</span>
//                   <div className="calc-box">{multiplier}</div>
//                 </div>

//                 <div className="result">
//                   <span>=</span>
//                   <div className="total-box">₹{subtotal}</div>
//                 </div>
//               </div>

//               <p className="formula">
//                 Final Price = Area × Base Price × Multiplier <br />₹{subtotal} +
//                 18% GST = ₹{total}
//               </p>
//             </div>

//             {/* NOTES */}
//             <div className="notes">
//               <div>
//                 <h4>IMPORTANT NOTES</h4>
//                 <ul>
//                   <li>Minimum project cost: ₹10,000</li>
//                   <li>Price includes labor and material charges</li>
//                   <li>GST will be added as per government norms</li>
//                   <li>Final price may vary based on site conditions</li>
//                 </ul>
//               </div>

//               <img src="/images/construction2.jpg" alt="pricing" />
//             </div>

//             {/* CTA */}
//             <div className="cta">
//               <div>
//                 <h4>NEED A CUSTOM QUOTE?</h4>
//                 <p>Contact us for complex projects or bulk requirements.</p>
//               </div>
//               <button>CONTACT US</button>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="right">
//             <div className="summary">
//               <h3>COST SUMMARY</h3>

//               <p>
//                 <b>Service</b>
//                 <br />
//                 {service}
//               </p>
//               <p>
//                 <b>Category</b>
//                 <br />
//                 {category}
//               </p>
//               <p>
//                 <b>Material</b>
//                 <br />
//                 {material}
//               </p>
//               <p>
//                 <b>Area</b>
//                 <br />
//                 {area} sq ft
//               </p>

//               <hr />

//               <p>
//                 <b>Base Price</b>
//                 <br />₹{basePrice} / sq ft
//               </p>
//               <p>
//                 <b>Multiplier</b>
//                 <br />
//                 {multiplier}
//               </p>

//               <hr />

//               <p>
//                 <b>Subtotal</b>
//                 <br />₹{subtotal}
//               </p>
//               <p>GST (18%) ₹{gst}</p>

//               <h2>₹{total}</h2>

//               <button className="pdf">
//                 <FaDownload /> DOWNLOAD PDF
//               </button>
//               <button className="wa">
//                 <FaWhatsapp /> SHARE VIA WHATSAPP
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState } from "react";
// import "./PricingPage.css";
// import { FaCalculator, FaDownload, FaWhatsapp } from "react-icons/fa";

// export const PricingPage = () => {
//   const serviceMap = {
//     Construction: ["Concreting", "Brick Work", "Steel Work", "Plastering"],
//     Renovation: [
//       "Breaking",
//       "Civil Work",
//       "Tiling",
//       "Water Proofing",
//       "Grouting",
//     ],
//     Interior: ["Carpenter Work", "Ceiling Work", "Colouring", "Decorating"],
//     Maintenance: ["Seepage", "Water Proofing", "Grouting", "Crack Work"],
//   };

//   const materials = ["Basic", "Premium", "Luxury"];

//   const [area, setArea] = useState(1000);
//   const [category, setCategory] = useState("Construction");
//   const [service, setService] = useState(serviceMap["Construction"][0]);
//   const [material, setMaterial] = useState("Basic");

//   const [pricePerSqft, setPricePerSqft] = useState(0);
//   const [multiplier, setMultiplier] = useState(1);
//   const [gstPercent, setGstPercent] = useState(0);

//   const handleCategoryChange = (value) => {
//     setCategory(value);
//     setService(serviceMap[value][0]);
//   };

//   const fetchPrice = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:8089/api/pricing/calculate?category=${category}&service=${service}&material=${material}`,
//       );

//       const data = await res.json();

//       setPricePerSqft(data.pricePerSqft || 0);
//       setMultiplier(data.multiplier || 1);
//       setGstPercent(data.gst || 0);
//     } catch (err) {
//       console.error("Error fetching price", err);
//     }
//   };

//   const subtotal = area * pricePerSqft * multiplier;
//   const gstAmount = subtotal * (gstPercent / 100);
//   const total = subtotal + gstAmount;

//   return (
//     <>
//       <div className="pricing-hero">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>PRICING CALCULATOR</h1>
//           <p>
//             Enter your requirements below to calculate the estimated cost for
//             your project.
//           </p>
//         </div>
//       </div>

//       <div className="pricing">
//         <div className="pricing-wrapper">
//           <div className="left">
//             <div className="box">
//               <h3>
//                 <span>1</span> SELECT SERVICE DETAILS
//               </h3>

//               <div className="grid">
//                 {/* CATEGORY */}
//                 <div>
//                   <label>Category</label>
//                   <select
//                     value={category}
//                     onChange={(e) => handleCategoryChange(e.target.value)}
//                   >
//                     {Object.keys(serviceMap).map((cat) => (
//                       <option key={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* SERVICE */}
//                 <div>
//                   <label>Service</label>
//                   <select
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                   >
//                     {serviceMap[category].map((srv) => (
//                       <option key={srv}>{srv}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* MATERIAL */}
//                 <div>
//                   <label>Material Type</label>
//                   <select
//                     value={material}
//                     onChange={(e) => setMaterial(e.target.value)}
//                   >
//                     {materials.map((m) => (
//                       <option key={m}>{m}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* AREA */}
//                 <div>
//                   <label>Area (sq ft)</label>
//                   <input
//                     value={area}
//                     onChange={(e) => setArea(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <button className="calc-btn" onClick={fetchPrice}>
//                 <FaCalculator /> CALCULATE PRICE
//               </button>
//             </div>

//             <div className="box">
//               <h3>
//                 <span>3</span> HOW IT'S CALCULATED
//               </h3>

//               <div className="calc-row">
//                 <div className="group">
//                   <div className="calc-box">{area} sq ft</div>
//                   <span>×</span>
//                   <div className="calc-box">₹{pricePerSqft}</div>
//                   <span>×</span>
//                   <div className="calc-box">{multiplier}</div>
//                 </div>

//                 <div className="result">
//                   <span>=</span>
//                   <div className="total-box">₹{subtotal}</div>
//                 </div>
//               </div>

//               <p className="formula">
//                 Subtotal = {area} × {pricePerSqft} × {multiplier} = ₹{subtotal}{" "}
//                 <br />
//                 GST ({gstPercent}%) = ₹{gstAmount} <br />
//                 <b>Total = ₹{total}</b>
//               </p>
//             </div>

//             <div className="notes">
//               <div>
//                 <h4>IMPORTANT NOTES</h4>
//                 <ul>
//                   <li>Minimum project cost: ₹10,000</li>
//                   <li>Price includes labor and material charges</li>
//                   <li>GST will be added as per admin settings</li>
//                   <li>Final price may vary based on site conditions</li>
//                 </ul>
//               </div>

//               <img src="/images/construction2.jpg" alt="pricing" />
//             </div>

//             <div className="cta">
//               <div>
//                 <h4>NEED A CUSTOM QUOTE?</h4>
//                 <p>Contact us for complex projects or bulk requirements.</p>
//               </div>
//               <button>CONTACT US</button>
//             </div>
//           </div>

//           <div className="right">
//             <div className="summary">
//               <h3>COST SUMMARY</h3>

//               <p>
//                 <b>Service</b>
//                 <br />
//                 {service}
//               </p>
//               <p>
//                 <b>Category</b>
//                 <br />
//                 {category}
//               </p>
//               <p>
//                 <b>Material</b>
//                 <br />
//                 {material}
//               </p>
//               <p>
//                 <b>Area</b>
//                 <br />
//                 {area} sq ft
//               </p>

//               <hr />

//               <p>
//                 <b>Price / Sqft</b>
//                 <br />₹{pricePerSqft}
//               </p>
//               <p>
//                 <b>Multiplier</b>
//                 <br />
//                 {multiplier}
//               </p>

//               <hr />

//               <p>
//                 <b>Subtotal</b>
//                 <br />₹{subtotal}
//               </p>
//               <p>
//                 GST ({gstPercent}%) ₹{gstAmount}
//               </p>

//               <h2>₹{total}</h2>

//               <button className="pdf">
//                 <FaDownload /> DOWNLOAD PDF
//               </button>
//               <button className="wa">
//                 <FaWhatsapp /> SHARE VIA WHATSAPP
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState } from "react";
// import "./PricingPage.css";
// import { FaCalculator, FaDownload, FaWhatsapp } from "react-icons/fa";

// export const PricingPage = () => {
//   const serviceMap = {
//     Construction: ["Concreting", "Brick Work", "Steel Work", "Plastering"],
//     Renovation: [
//       "Breaking",
//       "Civil Work",
//       "Tiling",
//       "Water Proofing",
//       "Grouting",
//     ],
//     Interior: ["Carpenter Work", "Ceiling Work", "Colouring", "Decorating"],
//     Maintenance: ["Seepage", "Water Proofing", "Grouting", "Crack Work"],
//   };

//   const materials = ["Basic", "Premium", "Luxury"];

//   const [area, setArea] = useState(1000);
//   const [category, setCategory] = useState("Construction");
//   const [service, setService] = useState(serviceMap["Construction"][0]);
//   const [material, setMaterial] = useState("Basic");

//   const [pricePerSqft, setPricePerSqft] = useState(0);
//   const [multiplier, setMultiplier] = useState(1);
//   const [gstPercent, setGstPercent] = useState(0);

//   const handleCategoryChange = (value) => {
//     setCategory(value);
//     setService(serviceMap[value][0]);
//   };

//   const fetchPrice = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:8089/api/pricing/calculate?category=${category}&service=${service}&material=${material}`,
//       );

//       const data = await res.json();

//       console.log("API RESPONSE:", data); // 🔥 DEBUG

//       setPricePerSqft(Number(data.pricePerSqft) || 0);
//       setMultiplier(Number(data.multiplier) || 1);
//       setGstPercent(Number(data.gst) || 0);
//     } catch (err) {
//       console.error("Error fetching price", err);
//     }
//   };

//   // ✅ SAFE calculations
//   const safeArea = Number(area) || 0;
//   const subtotal = Math.round(safeArea * pricePerSqft * multiplier);
//   const gstAmount = Math.round(subtotal * (gstPercent / 100));
//   const total = Math.round(subtotal + gstAmount);

//   return (
//     <>
//       <div className="pricing-hero">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>PRICING CALCULATOR</h1>
//           <p>
//             Enter your requirements below to calculate the estimated cost for
//             your project.
//           </p>
//         </div>
//       </div>

//       <div className="pricing">
//         <div className="pricing-wrapper">
//           <div className="left">
//             <div className="box">
//               <h3>
//                 <span>1</span> SELECT SERVICE DETAILS
//               </h3>

//               <div className="grid">
//                 <div>
//                   <label>Category</label>
//                   <select
//                     value={category}
//                     onChange={(e) => handleCategoryChange(e.target.value)}
//                   >
//                     {Object.keys(serviceMap).map((cat) => (
//                       <option key={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label>Service</label>
//                   <select
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                   >
//                     {serviceMap[category].map((srv) => (
//                       <option key={srv}>{srv}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label>Material Type</label>
//                   <select
//                     value={material}
//                     onChange={(e) => setMaterial(e.target.value)}
//                   >
//                     {materials.map((m) => (
//                       <option key={m}>{m}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label>Area (sq ft)</label>
//                   <input
//                     type="number" // ✅ FIX
//                     value={area}
//                     onChange={(e) => setArea(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <button className="calc-btn" onClick={fetchPrice}>
//                 <FaCalculator /> CALCULATE PRICE
//               </button>
//             </div>

//             <div className="box">
//               <h3>
//                 <span>3</span> HOW IT'S CALCULATED
//               </h3>

//               <div className="calc-row">
//                 <div className="group">
//                   <div className="calc-box">{safeArea} sq ft</div>
//                   <span>×</span>
//                   <div className="calc-box">₹{pricePerSqft}</div>
//                   <span>×</span>
//                   <div className="calc-box">{multiplier}</div>
//                 </div>

//                 <div className="result">
//                   <span>=</span>
//                   <div className="total-box">₹{subtotal}</div>
//                 </div>
//               </div>

//               <p className="formula">
//                 Subtotal = {safeArea} × {pricePerSqft} × {multiplier} = ₹
//                 {subtotal} <br />
//                 GST ({gstPercent}%) = ₹{gstAmount} <br />
//                 <b>Total = ₹{total}</b>
//               </p>
//             </div>

//             <div className="notes">
//               <div>
//                 <h4>IMPORTANT NOTES</h4>
//                 <ul>
//                   <li>Minimum project cost: ₹10,000</li>
//                   <li>Price includes labor and material charges</li>
//                   <li>GST will be added as per admin settings</li>
//                   <li>Final price may vary based on site conditions</li>
//                 </ul>
//               </div>

//               <img src="/images/construction2.jpg" alt="pricing" />
//             </div>

//             <div className="cta">
//               <div>
//                 <h4>NEED A CUSTOM QUOTE?</h4>
//                 <p>Contact us for complex projects or bulk requirements.</p>
//               </div>
//               <button>CONTACT US</button>
//             </div>
//           </div>

//           <div className="right">
//             <div className="summary">
//               <h3>COST SUMMARY</h3>

//               <p>
//                 <b>Service</b>
//                 <br />
//                 {service}
//               </p>
//               <p>
//                 <b>Category</b>
//                 <br />
//                 {category}
//               </p>
//               <p>
//                 <b>Material</b>
//                 <br />
//                 {material}
//               </p>
//               <p>
//                 <b>Area</b>
//                 <br />
//                 {safeArea} sq ft
//               </p>

//               <hr />

//               <p>
//                 <b>Price / Sqft</b>
//                 <br />₹{pricePerSqft}
//               </p>
//               <p>
//                 <b>Multiplier</b>
//                 <br />
//                 {multiplier}
//               </p>

//               <hr />

//               <p>
//                 <b>Subtotal</b>
//                 <br />₹{subtotal}
//               </p>
//               <p>
//                 GST ({gstPercent}%) ₹{gstAmount}
//               </p>

//               <h2>₹{total}</h2>

//               <button className="pdf">
//                 <FaDownload /> DOWNLOAD PDF
//               </button>
//               <button className="wa">
//                 <FaWhatsapp /> SHARE VIA WHATSAPP
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState, useEffect } from "react";
// import "./PricingPage.css";
// import { FaDownload, FaWhatsapp } from "react-icons/fa";

// export const PricingPage = () => {
//   const serviceMap = {
//     Construction: ["Concreting", "Brick Work", "Steel Work", "Plastering"],
//     Renovation: [
//       "Breaking",
//       "Civil Work",
//       "Tiling",
//       "Water Proofing",
//       "Grouting",
//     ],
//     Interior: ["Carpenter Work", "Ceiling Work", "Colouring", "Decorating"],
//     Maintenance: ["Seepage", "Water Proofing", "Grouting", "Crack Work"],
//   };

//   const materials = ["Basic", "Premium", "Luxury"];

//   const [area, setArea] = useState(1000);
//   const [category, setCategory] = useState("Construction");
//   const [service, setService] = useState(serviceMap["Construction"][0]);
//   const [material, setMaterial] = useState("Basic");

//   const [pricePerSqft, setPricePerSqft] = useState(0);
//   const [multiplier, setMultiplier] = useState(1);
//   const [gstPercent, setGstPercent] = useState(0);

//   const handleCategoryChange = (value) => {
//     setCategory(value);
//     setService(serviceMap[value][0]);
//   };

//   // 🔥 AUTO API CALL (NO BUTTON)
//   useEffect(() => {
//     const fetchPrice = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:8089/api/pricing/calculate?category=${category}&service=${service}&material=${material}`,
//         );

//         if (!res.ok) return;

//         const data = await res.json();

//         setPricePerSqft(Number(data.pricePerSqft) || 0);
//         setMultiplier(Number(data.multiplier) || 1);
//         setGstPercent(Number(data.gst) || 0);
//       } catch (err) {
//         console.error("Error fetching price", err);
//       }
//     };

//     fetchPrice();
//   }, [category, service, material]); // 🔥 trigger on change

//   // ✅ CALCULATIONS (auto)
//   const safeArea = Number(area) || 0;
//   const subtotal = Math.round(safeArea * pricePerSqft * multiplier);
//   const gstAmount = Math.round(subtotal * (gstPercent / 100));
//   const total = Math.round(subtotal + gstAmount);

//   return (
//     <>
//       <div className="pricing-hero">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>PRICING CALCULATOR</h1>
//           <p>
//             Enter your requirements below to calculate the estimated cost for
//             your project.
//           </p>
//         </div>
//       </div>

//       <div className="pricing">
//         <div className="pricing-wrapper">
//           <div className="left">
//             <div className="box">
//               <h3>
//                 <span>1</span> SELECT SERVICE DETAILS
//               </h3>

//               <div className="grid">
//                 <div>
//                   <label>Category</label>
//                   <select
//                     value={category}
//                     onChange={(e) => handleCategoryChange(e.target.value)}
//                   >
//                     {Object.keys(serviceMap).map((cat) => (
//                       <option key={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label>Service</label>
//                   <select
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                   >
//                     {serviceMap[category].map((srv) => (
//                       <option key={srv}>{srv}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label>Material Type</label>
//                   <select
//                     value={material}
//                     onChange={(e) => setMaterial(e.target.value)}
//                   >
//                     {materials.map((m) => (
//                       <option key={m}>{m}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label>Area (sq ft)</label>
//                   <input
//                     type="number"
//                     value={area}
//                     onChange={(e) => setArea(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* ❌ BUTTON REMOVED */}
//             </div>

// <div className="box">
//   <h3>
//     <span>3</span> HOW IT'S CALCULATED
//   </h3>

//   <div className="calc-row">
//     <div className="group">
//       <div className="calc-box">{safeArea} sq ft</div>
//       <span>×</span>
//       <div className="calc-box">₹{pricePerSqft}</div>
//       <span>×</span>
//       <div className="calc-box">{multiplier}</div>
//     </div>

//     <div className="result">
//       <span>=</span>
//       <div className="total-box">₹{subtotal}</div>
//     </div>
//   </div>

//   <p className="formula">
//     Subtotal = {safeArea} × {pricePerSqft} × {multiplier} = ₹
//     {subtotal} <br />
//     GST ({gstPercent}%) = ₹{gstAmount} <br />
//     <b>Total = ₹{total}</b>
//   </p>
// </div>

//   <div className="notes">
//     <div>
//       <h4>IMPORTANT NOTES</h4>
//       <ul>
//         <li>Minimum project cost: ₹10,000</li>
//         <li>Price includes labor and material charges</li>
//         <li>GST will be added as per admin settings</li>
//         <li>Final price may vary based on site conditions</li>
//       </ul>
//     </div>

//     <img src="/images/construction2.jpg" alt="pricing" />
//   </div>

//   <div className="cta">
//     <div>
//       <h4>NEED A CUSTOM QUOTE?</h4>
//       <p>Contact us for complex projects or bulk requirements.</p>
//     </div>
//     <button>CONTACT US</button>
//   </div>
// </div>

// <div className="right">
//   <div className="summary">
//     <h3>COST SUMMARY</h3>

//     <p>
//       <b>Service</b>
//       <br />
//       {service}
//     </p>
//     <p>
//       <b>Category</b>
//       <br />
//       {category}
//     </p>
//     <p>
//       <b>Material</b>
//       <br />
//       {material}
//     </p>
//     <p>
//       <b>Area</b>
//       <br />
//       {safeArea} sq ft
//     </p>

//     <hr />

//               <p>
//                 <b>Price / Sqft</b>
//                 <br />₹{pricePerSqft}
//               </p>
//               <p>
//                 <b>Multiplier</b>
//                 <br />
//                 {multiplier}
//               </p>

//               <hr />

//               <p>
//                 <b>Subtotal</b>
//                 <br />₹{subtotal}
//               </p>
//               <p>
//                 GST ({gstPercent}%) ₹{gstAmount}
//               </p>

//               <h2>₹{total}</h2>

//               <button className="pdf">
//                 <FaDownload /> DOWNLOAD PDF
//               </button>
//               <button className="wa">
//                 <FaWhatsapp /> SHARE VIA WHATSAPP
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useState, useEffect, useRef } from "react";
import "./PricingPage.css";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

export const PricingPage = () => {
  const pdfRef = useRef();

  const serviceMap = {
    Construction: ["Concreting", "Brick Work", "Steel Work", "Plastering"],
    Renovation: [
      "Breaking",
      "Civil Work",
      "Tiling",
      "Water Proofing",
      "Grouting",
    ],
    Interior: ["Carpenter Work", "Ceiling Work", "Colouring", "Decorating"],
    Maintenance: ["Seepage", "Water Proofing", "Grouting", "Crack Work"],
  };

  const materials = ["Basic", "Premium", "Luxury"];

  const [area, setArea] = useState(1000);
  const [category, setCategory] = useState("Construction");
  const [service, setService] = useState(serviceMap["Construction"][0]);
  const [material, setMaterial] = useState("Basic");

  const [pricePerSqft, setPricePerSqft] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gstPercent, setGstPercent] = useState(0);

  const handleCategoryChange = (value) => {
    setCategory(value);
    setService(serviceMap[value][0]);
  };

  // 🔥 AUTO API
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/pricing/calculate?category=${category}&service=${service}&material=${material}`,
);

        if (!res.ok) return;

        const data = await res.json();

        setPricePerSqft(Number(data.pricePerSqft) || 0);
        setMultiplier(Number(data.multiplier) || 1);
        setGstPercent(Number(data.gst) || 0);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPrice();
  }, [category, service, material]);

  const safeArea = Number(area) || 0;
  const subtotal = Math.round(safeArea * pricePerSqft * multiplier);
  const gstAmount = Math.round(subtotal * (gstPercent / 100));
  const total = Math.round(subtotal + gstAmount);

  const downloadPDF = () => {
    const pdf = new jsPDF();

    // ✅ FIX (VERY IMPORTANT)
    pdf.setCharSpace(0);
    pdf.setFont("helvetica", "normal");

    const img = new Image();
    img.src = "/images/logo.png";

    img.onload = () => {
      pdf.addImage(img, "PNG", 80, 10, 50, 20);

      pdf.setFontSize(18);
      pdf.text("Happy Homes Pricing Estimate", 50, 40);

      pdf.setLineWidth(0.5);
      pdf.line(10, 45, 200, 45);

      pdf.setFontSize(12);

      let y = 60;

      pdf.text(`Category: ${category}`, 20, y);
      y += 8;
      pdf.text(`Service: ${service}`, 20, y);
      y += 8;
      pdf.text(`Material: ${material}`, 20, y);
      y += 8;

      pdf.text(`Area: ${safeArea} sq ft`, 20, y);
      y += 8;

      // 👉 ₹ kabhi kabhi issue karta hai → safer use "Rs"
      pdf.text(`Price per Sqft: Rs ${pricePerSqft}`, 20, y);
      y += 8;

      pdf.text(`Multiplier: ${multiplier}`, 20, y);
      y += 15;

      pdf.setFontSize(14);
      pdf.text("Cost Summary", 20, y);

      y += 10;
      pdf.setFontSize(12);

      pdf.text(`Subtotal: Rs ${subtotal}`, 20, y);
      y += 8;

      pdf.text(`GST (${gstPercent}%): Rs ${gstAmount}`, 20, y);
      y += 10;

      pdf.setFontSize(16);
      pdf.text(`Total: Rs ${total}`, 20, y);

      pdf.setFontSize(10);
      pdf.text("Thank you for choosing Happy Homes!", 50, 280);

      pdf.save("HappyHomes_Pricing.pdf");
    };
  };

  // ✅ WHATSAPP SHARE
  const shareWhatsApp = () => {
    const message = `🏠 Happy Homes Pricing

Category: ${category}
Service: ${service}
Material: ${material}

Area: ${safeArea} sq ft
Price/sqft: ₹${pricePerSqft}
Multiplier: ${multiplier}

Subtotal: ₹${subtotal}
GST: ₹${gstAmount}

💰 Total: ₹${total}
`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <div ref={pdfRef}>
        {/* HERO */}
        <div className="pricing-hero">
          <div className="overlay"></div>
          <div className="hero-text">
            <h1>PRICING CALCULATOR</h1>
            <p>Enter your requirements below to calculate the cost.</p>
          </div>
        </div>

        <div className="pricing">
          <div className="pricing-wrapper">
            {/* LEFT */}
            <div className="left">
              <div className="box">
                <h3>
                  <span>1</span> SELECT SERVICE DETAILS
                </h3>

                <div className="grid">
                  <div>
                    <label>Category</label>
                    <select
                      value={category}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                      {Object.keys(serviceMap).map((cat) => (
                        <option key={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Service</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      {serviceMap[category].map((srv) => (
                        <option key={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Material</label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                    >
                      {materials.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Area</label>
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* CALC */}
              {/* <div className="box">
                <h3>
                  <span>3</span> HOW IT'S CALCULATED
                </h3>

                <p>Subtotal: ₹{subtotal}</p>
                <p>GST: ₹{gstAmount}</p>
                <h3>Total: ₹{total}</h3>
              </div> */}

              <div className="box">
                <h3>
                  <span>3</span> HOW IT'S CALCULATED
                </h3>

                <div className="calc-row">
                  <div className="group">
                    <div className="calc-box">{safeArea} sq ft</div>
                    <span>×</span>
                    <div className="calc-box">₹{pricePerSqft}</div>
                    <span>×</span>
                    <div className="calc-box">{multiplier}</div>
                  </div>

                  <div className="result">
                    <span>=</span>
                    <div className="total-box">₹{subtotal}</div>
                  </div>
                </div>

                <p className="formula">
                  Subtotal = {safeArea} × {pricePerSqft} × {multiplier} = ₹
                  {subtotal} <br />
                  GST ({gstPercent}%) = ₹{gstAmount} <br />
                  <b>Total = ₹{total}</b>
                </p>
              </div>

              {/* 🔥 NOTES BACK */}
              <div className="notes">
                <div>
                  <h4>IMPORTANT NOTES</h4>
                  <ul>
                    <li>Minimum project cost: ₹10,000</li>
                    <li>Includes labor & materials</li>
                    <li>GST applied as per admin</li>
                    <li>Final cost may vary</li>
                  </ul>
                </div>
                <img src="/images/construction2.jpg" alt="pricing" />
              </div>

              {/* 🔥 CTA BACK */}
              <div className="cta">
                <div>
                  <h4>NEED A CUSTOM QUOTE?</h4>
                  <p>Contact us for complex projects.</p>
                </div>
                <Link to="/contact">
                  <button>CONTACT US</button>
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right">
              <div className="summary">
                <h3>COST SUMMARY</h3>

                <p>Service: {service}</p>
                <p>Category: {category}</p>
                <p>Material: {material}</p>
                <p>Area: {safeArea}</p>

                <hr />

                <p>₹{pricePerSqft} / sqft</p>
                <p>Multiplier: {multiplier}</p>

                <hr />

                <p>Subtotal: ₹{subtotal}</p>
                <p>GST: ₹{gstAmount}</p>

                <h2>₹{total}</h2>

                <button className="pdf" onClick={downloadPDF}>
                  <FaDownload /> DOWNLOAD PDF
                </button>

                <button className="wa" onClick={shareWhatsApp}>
                  <FaWhatsapp /> SHARE WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
