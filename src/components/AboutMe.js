import React from "react";
import profile from "./images/profile.jpeg";

export default function AboutMe() {
  return (
    <section id="about">
      <div class="about container">
        <div class="col-left">
          <div class="about-img">
            <img src={profile} alt="img" />
          </div>
        </div>
        <div class="col-right">
          <h1 class="section-title">
            About <span>me</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            I am an experienced problem solver and possess good organizational
            and management skills. I enjoy working in a grouped environment as
            well as individually. I have excellent communication skills and can
            follow tasks/instructions carefully. I'm also a Manchester City fan,
            who enjoys playing football.
          </p>
          <a
            href="https://docs.google.com/document/d/1e6tYfTgS9n9GxhY5-7flfew_v-PPdE2M/edit?usp=sharing&ouid=100241470360859695388&rtpof=true&sd=true"
            download
            class="cta"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
