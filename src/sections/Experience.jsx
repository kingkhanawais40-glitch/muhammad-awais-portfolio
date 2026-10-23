import Reveal from "../components/Reveal";

function Experience() {

  const experience = [
    {
      year: "2026",
      title: "Smart AI Chatbot",
      company: "Personal  Project",
      description:
        "An AI-powered conversational chatbot built with Google Gemini API, featuring contextual responses, voice input, chat history, dark/light mode, and a responsive interface with secure server-side API integration."
    },
    {
      year: "2026",
      title: "Hotel Management System",
      company: "University Project",
      description:
        "Developed a responsive hotel management application with booking, dashboard and admin features."
    },
    {
      year: "2026",
      title: "Student Attendance System",
      company: "personal project",
      description:
        "Student Attendance Management System is a full-stack web application that allows administrators and teachers to manage students, mark daily attendance, view attendance history, generate reports, and manage user accounts through role-based access control."
    }
  ];

  return (
    <section className="experience" id="experience">

      <Reveal>

        <div className="experience-header">

          <p className="section-tag">
            EXPERIENCE
          </p>

          <h2>
            Projects & Learning Journey
          </h2>

        </div>

        <div className="timeline">

          {experience.map((item, index) => (

            <div
              className="timeline-item"
              key={index}
            >

              <div className="timeline-dot"></div>

              <div className="experience-card glass-card">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.company}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Reveal>

    </section>
  );
}

export default Experience;