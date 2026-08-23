import { useState } from "react";
import Reveal from "../components/Reveal";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaBrain,
  FaServer,
  FaCode,
  FaTools,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiTensorflow,
  SiCplusplus,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiFlask,
  SiStreamlit,
  SiJavascript,
} from "react-icons/si";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("AI / ML");

  const categories = [
    {
      name: "AI / ML",
      icon: <FaBrain />,
      description:
        "Machine learning, deep learning and computer vision technologies.",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
      ],
    },

    {
      name: "Frontend",
      icon: <FaCode />,
      description:
        "Modern interfaces and responsive web application development.",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },

    {
      name: "Backend",
      icon: <FaServer />,
      description:
        "Backend development, APIs and application services.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "PHP", icon: <FaPhp /> },
      ],
    },

    {
      name: "Database",
      icon: <FaDatabase />,
      description:
        "Relational and NoSQL database technologies.",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },

    {
      name: "Tools",
      icon: <FaTools />,
      description:
        "Development, version control and deployment tools.",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Streamlit", icon: <SiStreamlit /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
  ];

  const activeData = categories.find(
    (category) => category.name === activeCategory
  );

  return (
    <section className="skills" id="skills">
      <Reveal>

        {/* Header */}

        <div className="skills-dashboard-header">

          <div>
            <p className="skills-tag">
              Skills & Technologies
            </p>

            <h2>
              Technologies
              <span> I Use to Build Intelligence</span>
            </h2>
          </div>

          <p className="skills-header-description">
            A focused collection of technologies I use to
            build intelligent systems and modern software.
          </p>

        </div>


        {/* Dashboard */}

        <div className="skills-dashboard">

          {/* Sidebar */}

          <div className="skills-sidebar">

            <div className="sidebar-label">
              TECH STACK
            </div>

            {categories.map((category) => (

              <button
                key={category.name}
                className={`skill-category-btn ${
                  activeCategory === category.name
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category.name)
                }
              >

                <span className="category-icon">
                  {category.icon}
                </span>

                <span className="category-name">
                  {category.name}
                </span>

                <span className="category-arrow">
                  →
                </span>

              </button>

            ))}

          </div>


          {/* Content */}

          <div className="skills-dashboard-content">

            <div className="dashboard-content-header">

              <div className="dashboard-title">

                <div className="dashboard-main-icon">
                  {activeData.icon}
                </div>

                <div>
                  <h3>{activeData.name}</h3>

                  <p>
                    {activeData.description}
                  </p>
                </div>

              </div>

              <span className="skill-count">
                {activeData.skills.length} Skills
              </span>

            </div>


            {/* Skill Cards */}

            <div className="dashboard-skills-grid">

              {activeData.skills.map((skill) => (

                <div
                  className="dashboard-skill-card"
                  key={skill.name}
                >

                  <div className="dashboard-skill-icon">
                    {skill.icon}
                  </div>

                  <span>
                    {skill.name}
                  </span>

                  <div className="skill-card-arrow">
                    ↗
                  </div>

                </div>

              ))}

            </div>


            {/* Bottom Status */}

            <div className="dashboard-status">

              <span className="status-dot"></span>

              <span>
                Building with {activeData.name}
              </span>

            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}

export default Skills;