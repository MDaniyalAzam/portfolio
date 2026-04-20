import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      role: "Software Engineer",
      company: "Aideniti",
      companyType: "Self-Employed",
      period: "Sept 2023 - Present",
      location: "Remote",
      description:
        "Building production AI systems and scalable cloud applications",
      achievements: [
        "Engineered LLM-powered features with RAG architecture and vector embeddings",
        "Developed FastAPI microservices and Next.js applications with TypeScript",
        "Reduced Docker build times by 60% through CI/CD optimization",
        "Deployed containerized services on Kubernetes with Terraform IaC",
      ],
      tech: [
        "Python",
        "TypeScript",
        "React",
        "FastAPI",
        "Next.js",
        "LLMs",
        "Docker",
        "K8s",
        "AWS",
      ],
    },
    {
      type: "work",
      role: "Data Analyst Intern",
      company: "Energia Group",
      companyType: "UK Energy Provider",
      period: "June 2024 - Sept 2024",
      location: "Belfast, UK",
      description:
        "Applied ML to energy consumption data for grid optimization",
      achievements: [
        "Analyzed 43,699 household smart meter datasets using K-Means and GMM",
        "Improved segmentation accuracy by 15% through feature engineering",
        "Built Power BI dashboards for energy consumption insights",
        "Collaborated with data science team on anomaly detection",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "Power BI", "NumPy"],
    },
    {
      type: "work",
      role: "Associate Consultant",
      company: "Systems Limited",
      companyType: "Software Engineering",
      period: "Aug 2022 - Aug 2023",
      location: "Karachi, Pakistan",
      description: "Developed backend systems for enterprise banking clients",
      achievements: [
        "Built microservices for Forex Trading Portal using Node.js and Python",
        "Developed RESTful APIs for transactional financial systems",
        "Implemented CI/CD pipelines with GitLab and deployed on K8s",
        "Contributed to React frontend with TypeScript for type safety",
      ],
      tech: [
        "Node.js",
        "TypeScript",
        "Python",
        "Temenos",
        "Docker",
        "GitLab CI",
      ],
    },
    {
      type: "education",
      degree: "MSc Data Analytics",
      institution: "Queen's University Belfast",
      period: "2023 - 2024",
      location: "Belfast, UK",
      thesis: "Household Energy Consumption Patterns for Renewable Forecasting",
      modules: [
        "Machine Learning",
        "Big Data Analytics",
        "Predictive Modelling",
        "Data Visualization",
      ],
    },
    {
      type: "education",
      degree: "BSc Computer Science",
      institution: "FAST National University of Computer and Emerging Sciences",
      period: "2018 - 2022",
      location: "Karachi, Pakistan",
      modules: [
        "Data Structures",
        "AI",
        "Cloud Computing",
        "Probability & Statistics",
      ],
    },
  ];

  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const education = experiences.filter((exp) => exp.type === "education");

  const renderTimelineItem = (exp, index) => (
    <div key={index} className={`timeline-item ${exp.type}`}>
      <div className="timeline-icon">
        {exp.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
      </div>

      <div className="timeline-content">
        <div className="timeline-header">
          <div className="timeline-title-section">
            <h3 className="timeline-title">{exp.role || exp.degree}</h3>
            <div className="timeline-subtitle">
              <span className="company">{exp.company || exp.institution}</span>
              {exp.companyType && (
                <span className="company-type"> • {exp.companyType}</span>
              )}
            </div>
          </div>
          <div className="timeline-meta">
            <span className="period">{exp.period}</span>
            <span className="location">{exp.location}</span>
          </div>
        </div>

        {exp.description && (
          <p className="timeline-description">{exp.description}</p>
        )}

        {exp.thesis && (
          <p className="timeline-thesis">
            <strong>Dissertation:</strong> {exp.thesis}
          </p>
        )}

        {exp.achievements && (
          <ul className="achievements-list">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}

        {exp.modules && (
          <div className="modules">
            <strong>Key Modules:</strong> {exp.modules.join(" • ")}
          </div>
        )}

        {exp.tech && (
          <div className="timeline-tech">
            {exp.tech.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        {/* Experience Section */}
        <div className="section-header">
          <span className="section-label">// background</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {workExperiences.map((exp, index) => renderTimelineItem(exp, index))}
        </div>

        {/* Education Section */}
        <div className="section-header education-header">
          <span className="section-label">// academic</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline">
          {education.map((exp, index) => renderTimelineItem(exp, index))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
