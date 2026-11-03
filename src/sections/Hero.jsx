
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import profile1 from "../../assets/hero.png";
import profile2 from "../../assets/hero2.jfif";
import profile3 from "../../assets/hero3.jfif";
import profile4 from "../../assets/hero4.jfif";
import profile5 from "../../assets/hero5.png";
import profile6 from "../../assets/hero6.jfif";

import Reveal from "../components/Reveal";

import {
  FaProjectDiagram,
  FaCalendarAlt,
  FaLayerGroup,
  FaBrain,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const profileImages = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
];

function Hero() {
  const roles = [
    "I am Computer Vision Engineer",
    "I am Machine Learning Engineer",
    "I am AI Engineer",
    "I am Software Engineer",
    "I am Problem Solver",
    "I am Automation Engineer",
    "I am Data Scientist",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <Reveal>
        <div className="hero-content">
          {/* LEFT SIDE */}

          <div className="hero-left">
            <span className="hero-badge">
              <FaArrowRight className="badge-arrow" />
              Engineering Intelligence. Building Solutions.
            </span>

            <h1>
              Hi, I'm <br />
              <span>Muhammad Awais</span>
            </h1>

            <h2 className="hero-role">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  className="animated-role"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
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

          {/* RIGHT SIDE */}

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

              {/* Six-Photo Slideshow */}

              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={imageIndex}
                  src={profileImages[imageIndex]}
                  alt={`Muhammad Awais - Profile Photo ${imageIndex + 1}`}
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>

            <div className="hero-side-text">
              Engineering
              <br />
              The Future
              <br />
              With AI
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <FaProjectDiagram />
            </div>
            <div>
              <h3>15+</h3>
              <span>Projects Completed</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaCalendarAlt />
            </div>
            <div>
              <h3>2+</h3>
              <span>Years Experience</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaLayerGroup />
            </div>
            <div>
              <h3>10+</h3>
              <span>Technologies</span>
            </div>
          </div>

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
