// src/components/About/About.jsx
import { Code, Palette, Zap, Heart } from "lucide-react";
import "./About.css";
import Me from "../../assets/cat.png";

function About() {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code size={24} />,
      color: "#3b82f6",
    },
    { name: "UI/UX Design", icon: <Palette size={24} />, color: "#10b981" },
    {
      name: "Performance Optimization",
      icon: <Zap size={24} />,
      color: "#f59e0b",
    },
    { name: "Problem Solving", icon: <Heart size={24} />, color: "#ef4444" },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Hi everyeon, I'm a Newbie website developer. This website is about what I've done in my careers.
            </p>
            <p className="about-description">
              I'm trying my best to improve myself on coding way.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div
                    className="skill-icon"
                    style={{
                      backgroundColor: skill.color + "20",
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                Download Resume
              </a>
              <button
                className="btn-secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src={Me} alt="pfp" className="pfp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
