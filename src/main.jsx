import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/responsive.css";
import "./styles/experience.css";
import "./styles/education.css";
import "./styles/ai-projects.css";
import "./styles/github.css";
import "./styles/sidebar.css";
import "./styles/journey.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>

  <App />

</ThemeProvider>
);