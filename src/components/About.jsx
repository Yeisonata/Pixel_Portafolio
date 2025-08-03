import logo from "../assets/Me.jpeg";
import "../style/About.css";
const About = () => {
    return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Columna izquierda: texto */}
        <div className="about-content">
          <h2 className="section-heading">
            <span className="section-number">01.</span> Sobre Mi
          </h2>
          <p>
            ¡Hola! Soy <strong>Yeison Tobón</strong>, tecnólogo en desarrollo de software
            con enfoque backend usando <strong>Node.js</strong> y <strong>TypeScript</strong>.
          </p>
          <p>
            También tengo experiencia en <strong>HTML</strong>, <strong>CSS</strong>,
            <strong> JavaScript</strong> y <strong>MySQL</strong>.
          </p>
          <p>
            Actualmente resido en <span className="highlight">Pereira, Colombia</span> y me apasiona crear soluciones funcionales y elegantes.
          </p>

          <div className="tech-list">
            <ul>
              <li>▹ JavaScript (ES6+)</li>
              <li>▹ React</li>
              <li>▹ Node.js</li>
            </ul>
            <ul>
              <li>▹ TypeScript</li>
              <li>▹ TailwindCSS</li>
              <li>▹ MySQL</li>
            </ul>
            <ul>
              <li>▹ PHP</li>
              <li>▹ Laravel</li>
              <li>▹ PostgreSQL</li>
            </ul>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="about-image-wrapper">
          <div className="image-frame">
            <img src={logo} alt="Yeison Tobón" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;