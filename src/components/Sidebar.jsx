import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="side-sidebar">
      <div className="side-icons">
        <a
          href="https://github.com/kingkhanawais40-glitch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-awais-7933a1327/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:kingkhanawais40@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="side-line"></div>

      <div className="side-scroll">Scroll Down</div>
    </aside>
  );
}

export default Sidebar;
