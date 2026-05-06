// import React from "react";
// import "./Gallery.css";
// import { GallerySection } from "./GallerySection";

// export const Gallery = () => {
//   return (
//     <div>
//       {/* HERO */}
//       <div
//         className="gallery-hero"
//         style={{ backgroundImage: `url("/images/construction2.jpg")` }}
//       >
//         <div className="overlay"></div>
//         <h1 style={{ marginTop: "70px" }}>Gallery</h1>
//       </div>

//       {/* SECTIONS */}
//       <div className="gallery-container">
//         <GallerySection
//           title="Maintenance"
//           images={[
//             "/images/maintenance1.jpg",
//             "/images/maintenance2.jpg",
//             "/images/maintenance1.jpg",
//           ]}
//         />

//         <GallerySection
//           title="Interior"
//           images={[
//             "/images/interior.jpg",
//             "/images/interior2.jpg",
//             "/images/interior.jpg",
//           ]}
//         />

//         <GallerySection
//           title="Construction"
//           images={[
//             "/images/construction.jpg",
//             "/images/construction2.jpg",
//             "/images/construction.jpg",
//             "/images/construction.jpg",
//             "/images/construction2.jpg",
//             "/images/construction.jpg",
//             "/images/construction.jpg",
//             "/images/construction2.jpg",
//             "/images/construction.jpg",
//           ]}
//         />

//         <GallerySection
//           title="Renovation"
//           images={[
//             "/images/renovation.jpg",
//             "/images/renovation2.jpg",
//             "/images/renovation.jpg",
//           ]}
//         />
//       </div>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import "./Gallery.css";
// import { GallerySection } from "./GallerySection";

// export const Gallery = () => {
//   const [data, setData] = useState({
//     Construction: [],
//     Renovation: [],
//     Interior: [],
//     Maintenance: [],
//   });

//   useEffect(() => {
//     const categories = [
//       "Construction",
//       "Renovation",
//       "Interior",
//       "Maintenance",
//     ];

//     categories.forEach(async (cat) => {
//       const res = await fetch(`http://localhost:8089/api/gallery/${cat}`);
//       const json = await res.json();

//       setData((prev) => ({
//         ...prev,
//         [cat]: json.map((i) => i.imageUrl),
//       }));
//     });
//   }, []);

//   return (
//     <div>
//       <div className="gallery-hero">
//         <div className="overlay"></div>
//         <h1>Gallery</h1>
//       </div>

//       <div className="gallery-container">
//         {Object.keys(data).map((cat) => (
//           <GallerySection key={cat} title={cat} images={data[cat]} />
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { GallerySection } from "./GallerySection";

export const Gallery = () => {
  const [data, setData] = useState({
    Construction: [],
    Renovation: [],
    Interior: [],
    Maintenance: [],
  });

  // 🔥 FETCH FUNCTION
  const fetchGallery = async () => {
    const categories = [
      "Construction",
      "Renovation",
      "Interior",
      "Maintenance",
    ];

    let updatedData = {};

    for (let cat of categories) {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/${cat}`);
        const json = await res.json();

        updatedData[cat] = json.map((i) => i.imageUrl);
      } catch (err) {
        console.error("Error loading", cat, err);
        updatedData[cat] = [];
      }
    }

    setData(updatedData);
  };

  // 🔥 FIRST LOAD + EVENT LISTENER
  useEffect(() => {
    fetchGallery();

    const handleUpdate = () => {
      fetchGallery();
    };

    // 🔥 listen admin changes
    window.addEventListener("galleryUpdated", handleUpdate);

    return () => {
      window.removeEventListener("galleryUpdated", handleUpdate);
    };
  }, []);

  return (
    <div>
      <div className="gallery-hero">
        <div className="overlay"></div>
        <h1>Gallery</h1>
      </div>

      <div className="gallery-container">
        {/* {Object.keys(data).map((cat) => (
          <GallerySection key={cat} title={cat} images={data[cat]} />
        ))} */}

        {Object.keys(data)
          .filter((cat) => data[cat] && data[cat].length > 0) // 🔥 FILTER
          .map((cat) => (
            <GallerySection key={cat} title={cat} images={data[cat]} />
          ))}
      </div>
    </div>
  );
};
