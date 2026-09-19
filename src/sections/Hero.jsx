import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import profile from "../assets/hero.png";
import Reveal from "../components/Reveal";

import {
  FaProjectDiagram,
  FaCalendarAlt,
  FaLayerGroup,
  FaBrain,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  const roles = [
    "I am  Computer Vision Engineer",
    "I am  Machine Learning Engineer",
    "I am  AI Engineer",
    "I am  Software Engineer",
    "I am Problem Solver",
    "I am  Automation Engineer",
    "I am  Data Scientist",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero" id="home">
      <Reveal>
        <div className="hero-content">

          {/* ================= LEFT ================= */}

          <div className="hero-left">

            <span className="hero-badge">
              <FaArrowRight className="badge-arrow" />
              Engineering Intelligence. Building Solutions.
            </span>

            <h1>
              Hi, I'm <br />
              <span>Muhammad Awais</span>
            </h1>

            {/* Animated Role */}
            <h2 className="hero-role">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  className="animated-role"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>

            <p className="hero-description">
              Curiosity drives the questions, engineering builds the answers,
              and intelligence makes them smarter. I explore artificial
              intelligence, machine learning, and computer vision to turn
              challenging ideas into practical solutions with meaningful
              impact.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View My Work <FaArrowRight />
              </a>

              <a
                href="/files/Muhammad_Awais_CV.pdf"
                download
                className="secondary-btn"
              >
                Download CV <FaDownload />
              </a>

            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="hero-right">

            <div className="hero-hex-pattern"></div>

            <div className="hero-image-box">

              {/* Code Panel */}
              <div className="floating-panel code-panel">
                <pre>
{`def solve(problem):
  ai = True
  while not solved:
    learn()
    adapt()
    ai.improve()
  return success`}
                </pre>
              </div>

              {/* AI Panel */}
              <div className="floating-panel ai-panel">

                <FaBrain />

                <span>
                  AI MODEL
                  <br />
                  TRAINING...
                </span>

                <div className="ai-wave"></div>

              </div>

              {/* Profile */}
              <img
                src={profile}
                alt="Muhammad Awais"
                className="hero-image"
              />

            </div>

            {/* Side Text */}
            <div className="hero-side-text">
              Engineering
              <br />
              The Future
              <br />
              With AI
            </div>

          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="hero-stats">

          {/* Projects */}
          <div className="stat-item">

            <div className="stat-icon">
              <FaProjectDiagram />
            </div>

            <div>
              <h3>15+</h3>
              <span>Projects Completed</span>
            </div>

          </div>

          {/* Experience */}
          <div className="stat-item">

            <div className="stat-icon">
              <FaCalendarAlt />
            </div>

            <div>
              <h3>2+</h3>
              <span>Years Experience</span>
            </div>

          </div>

          {/* Technologies */}
          <div className="stat-item">

            <div className="stat-icon">
              <FaLayerGroup />
            </div>

            <div>
              <h3>10+</h3>
              <span>Technologies</span>
            </div>

          </div>

          {/* AI Focus */}
          <div className="stat-item">

            <div className="stat-icon">
              <FaBrain />
            </div>

            <div>
              <h3>AI Focused</h3>
              <span>Building Intelligent Solutions</span>
            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}

export default Hero;