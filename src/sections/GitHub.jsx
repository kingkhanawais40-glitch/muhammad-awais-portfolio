import { FaGithub, FaCode, FaStar, FaLaptopCode } from "react-icons/fa";

function GitHub() {
  return (
    <section className="github" id="github">

      <div className="github-header">

        <p className="section-tag">
          GITHUB
        </p>

        <h2>
          Open Source & Development
        </h2>

        <p className="github-text">
          I enjoy building modern web applications, AI solutions and
          software engineering projects. Explore my repositories,
          development journey and latest work on GitHub.
        </p>

      </div>

      <div className="github-grid">

        <div className="github-card">

          <FaCode className="github-icon"/>

          <h3>Projects</h3>

          <p>
            AI applications, Full Stack websites and software engineering projects.
          </p>

        </div>

        <div className="github-card">

          <FaStar className="github-icon"/>

          <h3>Continuous Learning</h3>

          <p>
            Regularly improving skills through personal projects and modern technologies.
          </p>

        </div>

        <div className="github-card">

          <FaLaptopCode className="github-icon"/>

          <h3>Clean Code</h3>

          <p>
            Focused on maintainable architecture, performance and scalable solutions.
          </p>

        </div>

      </div>

      <a
        href="https://github.com/kingkhanawais40-glitch"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        <FaGithub />
        Visit GitHub Profile
      </a>

    </section>
  );
}

export default GitHub;