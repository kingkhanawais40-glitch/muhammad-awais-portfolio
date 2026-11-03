
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

import Reveal from "../components/Reveal";

import skindiseasedetectionImage from "../assets/ai projects/skin-disease-detection.png";
import aiQuizImage from "../assets/ai projects/AI-Quiz-Home.png";
import aiStudentPerformanceImage from "../assets/ai projects/AI-Student-Performance.png";
import AICHatbotImage from "../assets/ai projects/smart-chatbot.jfif";
import aiDataAnalystImage from "../assets/ai projects/AI-Business-Analysis.png";

function AIProjects() {
  const aiProjects = [
    {
      title: "AI Data Analyst & BI Automation Agent",
      category: "AI Analytics Platform",
      image: aiDataAnalystImage,
      description:
        "An intelligent business analytics platform that analyzes datasets, evaluates data quality, detects anomalies, answers business questions, generates insights, and visualizes trends through interactive dashboards. Includes historical analysis and automated execution workflows.",
      tech: [
        "Python",
        "FastAPI",
        "React.js",
        "Vite",
        "SQLite",
        "Pandas",
        "Plotly",
        "REST APIs",
        "Vercel Blob",
      ],
      github:
        "https://github.com/kingkhanawais40-glitch/ai-data-analyst-agent",
      demo: "https://ai-data-analyst-agent-sand.vercel.app",
      featured: true,
    },
    {
      title: "AI Quiz & Question Generator",
      category: "Generative AI",
      image: aiQuizImage,
      description:
        "A Gemini-powered learning platform that generates customizable quizzes and questions, provides intelligent explanations, tracks performance, and allows users to save and export study content.",
      tech: [
        "Python",
        "Streamlit",
        "Google Gemini API",
        "Generative AI",
        "JSON",
        "HTML/CSS",
        "CSV/TXT Export",
      ],
      github:
        "https://github.com/kingkhanawais40-glitch/ai-quiz-generator",
      demo: "https://ai-quiz-generator-awais.streamlit.app",
    },
    {
      title: "AI Smart Chatbot",
      category: "Conversational AI",
      image: AICHatbotImage,
      description:
        "An AI conversational chatbot powered by Google Gemini API, featuring contextual responses, voice input, chat history, dark and light modes, and secure server-side API integration.",
      tech: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Google Gemini API",
        "Serverless Backend",
        "Vercel",
      ],
      github:
        "https://github.com/kingkhanawais40-glitch/smart-chatbot",
      demo: "https://smart-chatbot-five.vercel.app",
    },
    {
      title: "Skin Disease Detection",
      category: "Deep Learning / Computer Vision",
      image: skindiseasedetectionImage,
      description:
        "A skin lesion classification system built with TensorFlow, EfficientNetB0, and Flask. It analyzes uploaded images and predicts one of seven classes, displaying confidence scores and class probabilities through a web interface.",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "EfficientNetB0",
        "Flask",
        "NumPy",
        "Scikit-learn",
        "JavaScript",
      ],
      github:
        "https://github.com/kingkhanawais40-glitch/skin-disease-detection-ai",
      demo: "#",
    },
    {
      title: "AI Student Performance Predictor",
      category: "Machine Learning",
      image: aiStudentPerformanceImage,
      description:
        "A machine learning application that predicts student academic performance using study habits, attendance, previous academic results, and other student data. Includes preprocessing, feature engineering, model training, and evaluation.",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Streamlit",
        "Matplotlib",
        "Seaborn",
      ],
      github:
        "https://github.com/kingkhanawais40-glitch/student-performance-prediction",
      demo:
        "https://student-performance-prediction-awais.streamlit.app",
    },
  ];

  return (
    <section className="ai-projects" id="ai-projects">
      <Reveal>
        <div className="ai-projects-header">
          <p className="section-tag">AI ENGINEERING SHOWCASE</p>

          <h2>
            Building <span>Intelligent Systems</span>
          </h2>

          <p>
            Exploring Machine Learning, Deep Learning, Computer Vision,
            Generative AI, and intelligent software applications through
            practical projects.
          </p>
        </div>
      </Reveal>

      <div className="ai-projects-grid">
        {aiProjects.map((project) => (
          <Reveal key={project.title}>
            <article
              className={`ai-project-card ${
                project.featured ? "ai-project-featured" : ""
              }`}
            >
              <div className="ai-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="ai-project-image"
                    loading="lazy"
                  />
                ) : (
                  <FaRobot />
                )}

                <div className="ai-image-overlay">
                  <span className="ai-category">
                    <FaBrain />
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="ai-featured-label">
                      Featured Project
                    </span>
                  )}
                </div>
              </div>

              <div className="ai-content">
                <h3>{project.title}</h3>

                <p className="ai-description">
                  {project.description}
                </p>

                <div className="ai-tech-heading">
                  <span>TECHNOLOGIES</span>
                  <span>{project.tech.length} tools</span>
                </div>

                <div className="ai-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="ai-buttons">
                  <a
                    href={project.github}
                    className="ai-btn ai-btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>

                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      className="ai-btn ai-btn-live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <span className="ai-demo-unavailable">
                      Demo unavailable
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default AIProjects;
