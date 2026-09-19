import Reveal from "../components/Reveal";
import {
  FaPuzzlePiece,
  FaBrain,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa";

import profileImage from "../assets/profile/Muhammad Awais.png";

function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about-grid">

          {/* ================================
              PROFILE VISUAL
          ================================= */}
          <div className="about-visual">
            <div className="about-visual-glow"></div>

            <div className="about-image-card">
              <img
                src={profileImage}
                alt="Muhammad Awais - Software Engineer and AI Engineer"
              />

              <div className="about-image-overlay">
                <span>SOFTWARE ENGINEER</span>
                <strong>AI & ML</strong>
              </div>
            </div>
          </div>

          {/* ================================
              ABOUT TEXT
          ================================= */}
          <div className="about-text">
            <p className="section-tag">About Me</p>

            <h2>
              Engineering Intelligent Solutions for the Future
            </h2>

            <p className="about-desc">
              I am a 6th-semester BS Software Engineering student at Sarhad University of Science and Information Technology, specializing in Machine Learning and Artificial Intelligence. My academic journey began at Edwardes College School Wing 1 and continued at Fazaia Inter College, where I developed a strong foundation in science and technology.

Today, I focus on building software, machine learning models, and intelligent applications that solve practical problems. Through hands-on projects and continuous learning, I am strengthening my skills in software engineering, AI, and modern development technologies.

I am driven by a clear ambition: to grow into an exceptional engineer who builds impactful technology, solves meaningful real-world problems, and contributes to the future of intelligent systems.
            </p>

            <a href="#skills" className="about-btn">
              More About Me <FaArrowRight />
            </a>
          </div>

          {/* ================================
              HIGHLIGHTS
          ================================= */}
          <div className="about-highlights">

            {/* Problem Solver */}
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaPuzzlePiece />
              </div>

              <div>
                <h4>Problem Solver</h4>

                <p>
                  Turning complex challenges into practical and effective
                  solutions.
                </p>
              </div>
            </div>

            {/* AI Engineer */}
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaBrain />
              </div>

              <div>
                <h4>AI Engineer</h4>

                <p>
                  Building intelligent solutions with Machine Learning, Deep
                  Learning, and modern AI technologies.
                </p>
              </div>
            </div>

            {/* Software Engineer */}
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaLaptopCode />
              </div>

              <div>
                <h4>Software Engineer</h4>

                <p>
                  Designing scalable, maintainable, and user-focused software
                  solutions.
                </p>
              </div>
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default About;