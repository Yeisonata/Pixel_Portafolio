import React, { useState } from "react";
import "../style/Slider.css";

const ImageSlider = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="slider-container">
      <button onClick={prev} className="slider-btn">⟨</button>
      <img src={images[index]} alt={`slide-${index}`} className="slider-image" />
      <button onClick={next} className="slider-btn">⟩</button>
    </div>
  );
};

export default ImageSlider;
