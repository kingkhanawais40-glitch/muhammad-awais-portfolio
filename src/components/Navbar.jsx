import { useContext, useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [activeSection, setActiveSection] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenMenu(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Muhammad <span>Awais</span>
      </div>

      {/* Navigation */}
      <ul className={`nav-menu ${mobileMenu ? "show" : ""}`}>

        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMobileMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMobileMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMobileMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#ai-projects" onClick={closeMobileMenu}>
            AI
          </a>
        </li>

        {/* More */}
        <li className="dropdown">

          <button
            className="more-btn"
            onClick={() => setOpenMenu((prev) => !prev)}
            aria-expanded={openMenu}
          >
            More <FaChevronDown />
          </button>

          {openMenu && (
            <div className="dropdown-menu">

              <a href="#experience" onClick={closeMobileMenu}>
                Experience
              </a>

              <a href="#education" onClick={closeMobileMenu}>
                Education
              </a>

              <a href="#github" onClick={closeMobileMenu}>
                GitHub
              </a>

            </div>
          )}

        </li>

        <li>
          <a href="#contact" onClick={closeMobileMenu}>
            Contact
          </a>
        </li>

      </ul>

      {/* Right controls */}
      <div className="social-links">

        <a
          href="#contact"
          className="connect-btn"
          onClick={closeMobileMenu}
        >
          Let's Connect <FaEnvelope />
        </a>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="mobile-toggle"
          onClick={() => {
            setMobileMenu((prev) => !prev);
            setOpenMenu(false);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;