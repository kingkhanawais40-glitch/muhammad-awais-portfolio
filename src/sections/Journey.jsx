import Reveal from "../components/Reveal";

function Journey() {

  const journey = [
    {
      year: "2023",
      title: "Started Coding Journey",
      desc: "Learning the fundamentals of programming",
    },
    {
      year: "2024",
      title: "Web Development",
      desc: "Building websites and web applications",
    },
    {
      year: "2025",
      title: "AI & Machine Learning",
      desc: "Exploring AI, ML, and real world datasets",
    },
    {
      year: "2026",
      title: "Advanced Projects",
      desc: "Building intelligent and scalable systems",
    },
    {
      year: "Future",
      title: "Building The Future",
      desc: "Continuing to learn and create impact",
      active: true,
    },
  ];

  return (
    <section className="journey" id="journey">
      <Reveal>

        <p className="section-tag journey-tag">My Journey</p>

        <div className="journey-track">
          {journey.map((item, index) => (
            <div
              className={`journey-item ${item.active ? "active" : ""}`}
              key={index}
            >
              <div className="journey-dot"></div>
              <span className="journey-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </Reveal>
    </section>
  );
}

export default Journey;
