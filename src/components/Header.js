import React, { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [style, setStyle] = useState({});
  const [scrollY, setScrollY] = useState(0);

  function manageHeaderStyle() {
    setScrollY(window.pageYOffset);
    if (scrollY > 250) {
      setStyle({
        backgroundColor: "#29323c",
      });
    } else {
      setStyle({
        backgroundColor: "transparent",
      });
    }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", manageHeaderStyle);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", manageHeaderStyle);
    };
  });
  return (
    <section id="header" style={style}>
      <div class="header container">
        <div class="nav-bar">
          <div class="brand">
            <a href="#hero">
              <h1>
                <span>P</span>ort<span>f</span>olio
              </h1>
            </a>
          </div>
          <div class="nav-list">
            <div class="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div class="bar"></div>
            </div>
            <ul
              className={isMenuOpen ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              <li>
                <a href="#hero" data-after="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" data-after="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://github.com/mohamedisaaq0" data-after="Contact">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
