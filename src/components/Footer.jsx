import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <h2>
            Muhammad <span>Awais</span>
          </h2>

          <p>
            Software Engineer • AI Engineer • ML Engineer
          </p>

          <p className="footer-description">
            Engineering intelligent systems that turn complex problems
into meaningful digital experiences.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-connect">

          <h3>Connect</h3>

          <div className="footer-social">

            <a
              href="https://github.com/kingkhanawais40-glitch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-awais-7933a1327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:kingkhanawais40@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Muhammad Awais. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="scroll-top"
        >
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;