import { useContext, useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
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




  return (

    <nav className="navbar">


      <div className="logo">
        Muhammad <span>Awais</span>
      </div>




      <ul className={`nav-menu ${mobileMenu ? "show" : ""}`}>



        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setMobileMenu(false)}
          >
            Home
          </a>
        </li>



        <li>
          <a
            href="#about"
            onClick={() => setMobileMenu(false)}
          >
            About
          </a>
        </li>



        <li>
          <a
            href="#skills"
            onClick={() => setMobileMenu(false)}
          >
            Skills
          </a>
        </li>



        <li>
          <a
            href="#projects"
            onClick={() => setMobileMenu(false)}
          >
            Projects
          </a>
        </li>



        <li>
          <a
            href="#ai-projects"
            onClick={() => setMobileMenu(false)}
          >
            AI
          </a>
        </li>




        <li className="dropdown">


          <button
            className="more-btn"
            onClick={() => setOpenMenu(!openMenu)}
          >

            More <FaChevronDown />

          </button>



          {
            openMenu && (

              <div className="dropdown-menu">

                <a href="#experience">
                  Experience
                </a>

                <a href="#education">
                  Education
                </a>
                <a href="#github">
                  GitHub
                </a>

              </div>

            )
          }


        </li>




        <li>
          <a
            href="#contact"
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </a>
        </li>



      </ul>





      <div className="social-links">



        <a
          href="#contact"
          className="connect-btn"
        >
          Let's Connect <FaEnvelope />
        </a>




        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >

          {
            darkMode
              ?
              <FaSun />
              :
              <FaMoon />
          }

        </button>




        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >

          {
            mobileMenu
              ?
              <FaTimes />
              :
              <FaBars />
          }


        </button>



      </div>



    </nav>

  );

}


export default Navbar;