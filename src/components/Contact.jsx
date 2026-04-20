import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">// let's connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-description">
              Open to opportunities in{" "}
              <span className="highlight">AI Engineering</span>,
              <span className="highlight"> Full Stack Development</span>,
              <span className="highlight"> Cloud & DevOps</span>, and
              <span className="highlight"> Data Engineering</span>.
            </p>
            <p className="contact-subdescription">
              Let's build something impactful together.
            </p>
          </div>

          <div className="contact-links">
            <a
              href="mailto:daniyal2000.azam@gmail.com"
              className="contact-link-item email"
            >
              <FaEnvelope className="contact-icon" />
              <div className="contact-link-content">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">
                  daniyal2000.azam@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mdaniyalazam/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item linkedin"
            >
              <FaLinkedin className="contact-icon" />
              <div className="contact-link-content">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">
                  linkedin.com/in/mdaniyalazam
                </span>
              </div>
            </a>

            <a
              href="https://github.com/MDaniyalAzam"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item github"
            >
              <FaGithub className="contact-icon" />
              <div className="contact-link-content">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">
                  github.com/MDaniyalAzam
                </span>
              </div>
            </a>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">
              Built with React • Designed for Impact
            </p>
            <p className="footer-copyright">© 2026 Muhammad Daniyal Azam</p>
          </div>

          <button
            onClick={scrollToTop}
            className="scroll-top"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
