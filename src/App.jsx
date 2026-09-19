import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import AIProjects from "./sections/AIProjects";
import GitHub from "./sections/GitHub";
import Journey from "./sections/Journey";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";



function App() {
  return (
    <>
      <MouseGlow />
      <div className="grain-overlay"></div>
      <div className="vignette-overlay"></div>
      <Loader />
      <ScrollProgress />
      

      <Navbar />
      <Sidebar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIProjects />
      <Experience />
      <Education />
      <GitHub />
      <Contact />
      <Journey />

      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;