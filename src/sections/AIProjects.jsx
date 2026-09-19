import { FaGithub, FaExternalLinkAlt, FaRobot } from "react-icons/fa";
import Reveal from "../components/Reveal";
import skindiseasedetectionImage from "../assets/ai projects/skin-disease-detection.png";
import aiQuizImage from "../assets/ai projects/AI-Quiz-Home.png";
import aiStudentPerformanceImage from "../assets/ai projects/AI-Student-Performance.png";

function AIProjects() {
  const aiProjects = [
    {
      title: "AI Quiz & Question Generator",
      image: aiQuizImage,
      description:
        "A Gemini-powered AI learning platform that generates customizable quizzes and questions, provides intelligent explanations, tracks performance, and lets users save and export their study content.",
      tech: ["Python", "Streamlit", "Google Gemini API", "Generative AI", "JSON", "HTML/CSS", "CSV/TXT Export"],
      github: "https://github.com/kingkhanawais40-glitch/ai-quiz-generator",
      demo: "https://ai-quiz-generator-awais.streamlit.app",
    },
    {
      title: "Skin Disease Detection",
      image: skindiseasedetectionImage,
      description:
        "AI-powered skin lesion classification system built with TensorFlow, EfficientNetB0, and Flask. The application analyzes uploaded images and predicts one of seven skin disease classes while displaying confidence scores and class probabilities through a web interface.",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "EfficientNetB0",
        "Flask",
        "NumPy",
        "Scikit-learn",
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub",
      ],
      github:
        "https://github.com/kingkhanawais40-glitch/skin-disease-detection-ai",
      demo: "#",
    },
    {
      title: "AI Student Performance Predictor",
      image: aiStudentPerformanceImage,
      description:
        "An AI-powered machine learning project that predicts student academic performance based on factors such as study habits, attendance, previous academic results, and other relevant student data. The project uses data preprocessing, feature engineering, model training, and evaluation to generate performance predictions and provide data-driven insights into student outcomes.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Matplotlib", "Seaborn"],
      github: "https://github.com/kingkhanawais40-glitch/student-performance-prediction",
      demo: "https://student-performance-prediction-awais.streamlit.app",
    },
    
  ];

  return (
    <section className="ai-projects" id="ai-projects">
      <div className="ai-projects-header">
        <p className="section-tag">AI PROJECTS</p>

        <h2>AI Engineering & Intelligent Systems</h2>

        <p>
          Practical AI solutions combining Machine Learning, Deep Learning, Computer Vision, and modern software engineering.
        </p>
      </div>

      <div className="ai-projects-grid">
        {aiProjects.map((project, index) => (
          <Reveal key={index}>
            <div className="ai-project-card">
              <div className="ai-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="ai-project-image"
                  />
                ) : (
                  <FaRobot />
                )}
              </div>

              <div className="ai-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="ai-tech">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="ai-buttons">
                  <a
                    href={project.github}
                    className="ai-btn ai-btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    &nbsp;GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="ai-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      &nbsp;Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default AIProjects;