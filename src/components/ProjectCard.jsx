import React, { useState, useEffect } from "react";
import "../style/Projects.css";
import ProjectModal from "./ProjectModal";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Permite cerrar con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  return (
    <>
      <div className={`project-card ${project.className || ""}`}>
        {/* Encabezado del proyecto */}
        <div className="project-header">
          {project.logo && (
            <img
              src={project.logo}
              alt={`Logo de ${project.title}`}
              className="project-logo"
            />
          )}
          <h3 className="project-title">{project.title}</h3>
        </div>

        {/* Imagen principal */}
        <img
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          className="project-img"
        />

        {/* Descripción corta */}
        <p className="project-description">{project.description}</p>

        {/* Tags (tecnologías) */}
        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag.id}>
              {tag.path && (
                <img
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="tag-icon"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Botones de acción */}
        <div className="project-actions">
          <button
            className="project-toggle-btn"
            onClick={() => setShowModal(true)}
            aria-label={`Ver más detalles de ${project.title}`}
          >
            Ver más
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              title="Ver código en GitHub"
              aria-label="Enlace a GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Modal de detalles */}
      {showModal && (
        <ProjectModal
          project={project}
          onClose={() => setShowModal(false)}
          className={project.className || ""}
        />
      )}
    </>
  );
};

export default ProjectCard;
