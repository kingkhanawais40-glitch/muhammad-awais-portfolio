import Reveal from "../components/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import hotelHome from "../assets/projects/hotel-home.png";
import attendancehomeImage from "../assets/projects/attendance-home.png";
import weatherdashboardImage from "../assets/projects/weather_dashboard.png";
import NexaposImage from "../assets/projects/Nexapos.png";
function Projects() {
  const projects = [
    

{
  title: "NexaPOS - Point of Sale System",
  category: "Web Application",
  image: NexaposImage,
  description:
    "A modern point of sale system designed for seamless transaction management, inventory tracking, and sales analytics in retail environments.",
  tech: [
    "React.js 19",
    "Vite 8",
    "Node.js",
    "Express 5",
    "SQLite/MySQL/libSQL",
    "Axios",
    "React Router 7",
    "JWT",
    "bcryptjs",
    "Multer",
    "Vercel"
  ],
  github: "https://github.com/kingkhanawais40-glitch/NEXAPOS",
  demo: "https://nexapos-self.vercel.app",
},

    {
  title: "Hotel Management System",
  category: "Full Stack Web Application",

  image: hotelHome,

  description:
    "A full-stack Hotel Management System developed using Django with room management, customer management, booking workflows, authentication, dashboard and responsive design.",

  tech: [
    "Python",
    "Django",
    "HTML5",
    "CSS3",
    "JavaScript",
    "SQLite",
  ],

  github: "https://github.com/kingkhanawais40-glitch/hotel-management-system",

  demo: "#",
},
    {
      title: "Student Attendance Management System",
      category: "Web Application / Full-Stack Application",
      image: attendancehomeImage,
      description:
        "A full-stack student attendance management system that enables administrators and teachers to manage students, record daily attendance, view attendance history and reports, and manage system users through role-based authentication.",
      tech: ["React", "Node.js", "Express", "SQLite", "JWT", "Axios"],
      github: "https://github.com/kingkhanawais40-glitch/student-attendance-system",
      demo: "#",
    },
    {
      title: "Weather-dashboard",
      category: "Web Application",
      image: weatherdashboardImage,
      description:
        "A feature-rich weather application built with Python and Streamlit that integrates the OpenWeatherMap REST API to deliver real-time weather data, 5-day forecasts, and air quality insights. Includes custom logic-driven features like clothing suggestions, rain alerts, and AQI health advisories, with a fully responsive, custom-styled UI. Deployed live on Streamlit Community Cloud.",
      tech: ["Python", "Streamlit", "OpenWeatherMap API"],
      github: "https://github.com/kingkhanawais40-glitch/weather-dashboard",
      demo: "https://weather-dashboard-awais.streamlit.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Reveal>
        <div className="projects-header">
          <div>
            <p className="section-tag">Featured Projects</p>
          </div>

          <a href="#ai-projects" className="view-all-link">
            View All Projects <FaExternalLinkAlt />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-image">
                {project.image && (
                  <img src={project.image} alt={project.title} />
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc-short">{project.category}</p>

                <div className="tech-stack">
                  {project.tech.slice(0, 3).map((item, i) => (
                    <span key={i} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-arrow-btn"
                    aria-label="View source on GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="project-arrow-btn project-demo-btn"
                      aria-label="View live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;