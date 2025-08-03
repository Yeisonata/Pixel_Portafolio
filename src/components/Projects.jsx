import { myProjects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import "../style/Projects.css";

function Projects() {
  return (
   <section id="projects" className="projects-section">
    
  <h2 className="projects-title">Proyectos</h2>
  <div className="projects-grid">
    {myProjects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</section>


  );
}

export default Projects;
