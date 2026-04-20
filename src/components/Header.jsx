import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "home", href: "#hero" },
    { name: "expertise", href: "#expertise" },
    { name: "work", href: "#work" },
    { name: "experience", href: "#experience" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">DA</span>
        </div>
        <nav className="nav">
          {navItems.map((item, index) => (
            <a key={item.name} href={item.href} className="nav-item">
              <span className="nav-index">0{index}</span>
              <span className="nav-separator">//</span>
              <span className="nav-name">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
