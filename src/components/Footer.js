import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="social-icon">
          <div className="social-item">
            <a href="https://github.com/mohamedisaaq0">
              <img
                src="https://img.icons8.com/plasticine/100/000000/github-squared.png"
                alt="github icon"
              />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/mohamedisaaq0/">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin Icon"
              />
            </a>
          </div>
          <div className="social-item">
            <a href="mailto: mohamedisaaq0@gmail.com">
              <img
                src="https://img.icons8.com/color-glass/48/000000/gmail.png"
                alt="gmail icon"
              />
            </a>
          </div>
        </div>
        <p>Copyright © 2022 Mohamed Hassan. All rights reserved</p>
      </div>
    </section>
  );
}
