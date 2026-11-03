
import Reveal from "../components/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import hotelHome from "../assets/projects/hotel-home.png";
import attendancehomeImage from "../assets/projects/attendance-home.png";
import weatherdashboardImage from "../assets/projects/weather_dashboard.png";
import NexaposImage from "../assets/projects/Nexapos.png";

function Projects() {
  const projects = [
    {
      title: "NexaPOS",
      subtitle: "Point of Sale System",
      category: "Featured Full-Stack Application",
      image: NexaposImage,
      description:
        "A modern point of sale solution for retail operations, featuring transaction management, inventory tracking and sales analytics.",
      tech: [
        "React.js 19",
        "Vite 8",
        "Node.js",
        "Express 5",
        "SQLite / MySQL / libSQL",
        "JWT",
        "Axios",
        "Multer",
      ],
      github: "https://github.com/kingkhanawais40-glitch/NEXAPOS",
      demo: "https://nexapos-self.vercel.app",
      featured: true,
    },
    {
      title: "Hotel Management System",
      subtitle: "Hotel Operations Platform",
      category: "Full-Stack Web Application",
      image: hotelHome,
      description:
        "A Django-based hotel management application for room management, customer records, booking workflows, authentication and dashboard operations.",
      tech: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "SQLite"],
      github:
        "https://github.com/kingkhanawais40-glitch/hotel-management-system",
      demo: "#",
    },
    {
      title: "Student Attendance Management",
      subtitle: "Attendance & Reporting Platform",
      category: "Full-Stack Web Application",
      image: attendancehomeImage,
      description:
        "A web-based attendance platform that helps administrators and teachers manage students, record daily attendance and access attendance history and reports.",
      tech: ["React", "Node.js", "Express", "SQLite", "JWT", "Axios"],
      github:
        "https://github.com/kingkhanawais40-glitch/student-attendance-system",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      subtitle: "Real-Time Weather Intelligence",
      category: "Python Web Application",
      image: weatherdashboardImage,
      description:
        "A weather dashboard using OpenWeatherMap API to provide real-time weather, five-day forecasts and air quality insights, with weather alerts and practical recommendations.",
      tech: ["Python", "Streamlit", "OpenWeatherMap API"],
      github:
        "https://github.com/kingkhanawais40-glitch/weather-dashboard",
      demo: "https://weather-dashboard-awais.streamlit.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Reveal>
        <div className="projects-header">
          <div>
            <p className="section-tag">MY WORK</p>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="projects-intro">
              A selection of applications showcasing my software development
              and problem-solving skills.
            </p>
          </div>

          <a href="#ai-projects" className="view-all-link">
            Explore AI Projects <FaExternalLinkAlt />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card glass-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.title}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />

                <div className="project-image-overlay">
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  {project.featured && (
                    <span className="project-featured-label">
                      Featured
                    </span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech-heading">
                  <span>TECHNOLOGIES</span>
                  <span>{project.tech.length} tools</span>
                </div>

                <div className="tech-stack">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-action-btn project-github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>

                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      className="project-action-btn project-demo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <span className="project-demo-unavailable">
                      Demo unavailable
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
