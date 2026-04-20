import React from "react";
import {
  FaBrain,
  FaCode,
  FaCloud,
  FaDatabase,
  FaDocker,
  FaRobot,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiTypescript,
  SiReact,
  SiFastapi,
} from "react-icons/si";
import "./Expertise.css";

const Expertise = () => {
  const skillCategories = [
    {
      icon: <FaBrain />,
      title: "Machine Learning & AI",
      skills: [
        "LLMs & Prompt Engineering",
        "RAG Systems",
        "TensorFlow & PyTorch",
        "Deep Learning (CNN, UNet)",
        "Scikit-learn",
        "Feature Engineering",
        "Model Evaluation & Tuning",
      ],
    },
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      skills: [
        "React & Next.js",
        "JavaScript & TypeScript",
        "Python & FastAPI",
        "Node.js",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      skills: [
        "AWS Infrastructure",
        "Docker & Kubernetes",
        "CI/CD (GitHub Actions)",
        "Terraform & IaC",
        "Databricks",
        "MLOps",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Data Engineering",
      skills: [
        "Pandas & NumPy",
        "SQL & MongoDB",
        "ETL Pipelines",
        "Power BI",
        "Vector Embeddings",
        "Data Modeling",
      ],
    },
  ];

  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AWS", icon: "☁️" },
    { name: "SQL", icon: "🗄️" },
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="expertise-container">
        <div className="section-header">
          <span className="section-label">// capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Core Technologies</h3>
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
