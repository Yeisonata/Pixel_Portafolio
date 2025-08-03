import React, { useState } from "react";
import "../style/Modal.css";

const ProjectModal = ({ project, onClose, className }) => {
  const gallery = project.gallery || [project.image];
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const next = () => setCurrent((prev) => (prev + 1) % gallery.length);
  const prev = () => setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 50) {
      // Swipe right
      prev();
    } else if (deltaX < -50) {
      // Swipe left
      next();
    }
    setTouchStartX(null);
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${className}`}>
        <button className="modal-close" onClick={onClose}>✖</button>

        <div
          className="modal-gallery"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={gallery[current]}
            alt="Slide"
            className="modal-image"
          />
          <button className="nav-button left" onClick={prev}>❮</button>
          <button className="nav-button right" onClick={next}>❯</button>
        </div>

        <h2>{project.title}</h2>
        <ul className="modal-details">
          {project.subDescription.map((desc, idx) => (
            <li key={idx}>🟢 {desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
