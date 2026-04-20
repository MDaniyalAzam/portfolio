import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">MUHAMMAD DANIYAL AZAM</h1>

        <h2 className="hero-subtitle">
          <span className="terminal-prompt">~/</span>
          <span>AI ENGINEER & FULL STACK DEVELOPER</span>
        </h2>

        <div className="hero-description">
          <p>
            Building production-grade{" "}
            <span className="highlight">AI systems</span> and{" "}
            <span className="highlight">full-stack applications</span>.
            Specializing in <span className="highlight">LLMs</span>,{" "}
            <span className="highlight">agentic AI</span>,{" "}
            <span className="highlight">cloud infrastructure</span>, and{" "}
            <span className="highlight">data engineering</span>.
          </p>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">ML/AI</span>
            <span className="stat-label">Specialization</span>
          </div>
          <div className="stat">
            <span className="stat-value">Cloud</span>
            <span className="stat-label">Architecture</span>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="#work" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
