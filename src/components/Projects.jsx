import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI-Assisted Content Platform",
      type: "Production AI System",
      description:
        "Built LLM-powered features for content generation, summarization, and structured data extraction. Implemented RAG systems with vector embeddings and semantic search.",
      tech: ["Python", "FastAPI", "LLMs", "RAG", "Docker", "Kubernetes"],
      highlights: [
        "Engineered prompt validation workflows",
        "Deployed scalable microservices on K8s",
        "Integrated CI/CD with automated testing",
      ],
      impact: "Production-grade AI capabilities serving real-time requests",
    },
    {
      title: "Household Energy Consumption Analysis",
      type: "ML Research Project",
      description:
        "Applied unsupervised ML (K-Means, GMM) to 43,699 household smart meter datasets. Performed feature engineering and hyperparameter tuning for consumption pattern segmentation.",
      tech: ["Python", "Scikit-learn", "Pandas", "Power BI", "NumPy"],
      highlights: [
        "Improved segmentation accuracy by 15%",
        "Built interactive Power BI dashboards",
        "Statistical validation & anomaly detection",
      ],
      impact:
        "Insights for grid load optimization and renewable energy forecasting",
    },
    {
      title: "Greenspace Detection (Deloitte Challenge)",
      type: "Deep Learning",
      description:
        "Developed semantic segmentation models (UNet, DeepLabV3) for Sentinel-2 satellite imagery to detect urban greenspaces.",
      tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision"],
      highlights: [
        "Achieved 93.75% segmentation accuracy",
        "Processed high-resolution satellite imagery",
        "Compared architecture performance metrics",
      ],
      impact: "Demonstrated advanced CV skills for geospatial applications",
    },
  ];

  return (
    <section id="work" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-label">// portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Production systems and research projects demonstrating AI/ML
            engineering capabilities
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-type">{project.type}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-bullet">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
