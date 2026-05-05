import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const GallerySection = ({ title, images }) => {
  const scrollRef = useRef();
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    setScrollPos(container.scrollLeft);
  };

  return (
    <div className="gallery-section">
      <h2>{title}</h2>

      <div className="slider-wrapper">
        {/* LEFT ARROW */}
        {images.length > 3 && scrollPos > 0 && (
          <button className="arrow left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
        )}

        {/* IMAGES */}
        <div className="slider" ref={scrollRef}>
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        {/* RIGHT ARROW */}
        {images.length > 3 && (
          <button className="arrow right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
