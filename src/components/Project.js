import React from "react";

import BookSearch from "./images/BookSearch.png";
import CodeCollege from "./images/CodeCollege.png";
import NoteTaker from "./images/NoteTaker.png";
import TechBlog from "./images/TechBlog.png";

export default function Project() {
  return (
    <section id="projects">
      <div class="projects container">
        <div class="projects-header">
          <h1 class="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>
        <div class="all-projects">
          <div class="project-item">
            <div class="project-info">
              <h1>Code College</h1>
              <h2>Group Project</h2>
              <p>
                We are an online coding academy that is student-centred that
                prepares students for coding. Providing a progress tracker for
                basic languages such as HTML and CSS to more advanced languages
                such as HTML, JavaScript and many more! This application is
                currently a prototype and is not yet fully built out. We are
                working hard to make it a fully fledged application. We hope you
                enjoy it as much as we do!
                <br />
                <br />
                Technologies used:
                <br />
                #Html / #Css / #Javascript / #SQL / #Sequilize / #Handlebars /
                #Express.JS / #Node.JS
              </p>
            </div>
            <div class="project-img">
              <a href="https://desolate-reef-02788.herokuapp.com/">
                <img src={CodeCollege} alt="img" />
              </a>
            </div>
          </div>

          <div class="project-item">
            <div class="project-info">
              <h1>Tech Blog</h1>
              <h2>Self Project</h2>
              <p>COMING SOON!</p>
            </div>

            <div class="project-img">
              <a href="https://secret-chamber-33052.herokuapp.com/">
                <img src={TechBlog} alt="img" />
              </a>
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Note Taker</h1>
              <h2>Self Project</h2>
              <p>
                This is an Application to help you keep track of your notes. It
                allows you to create, edit, and delete notes.
                <br />
                <br />
                Technologies used:
                <br />
                #Html / #Css / #Javascript / #Express.JS / #Node.JS
              </p>
            </div>
            <div class="project-img">
              <a href="https://beautiful-lake-clark-33694.herokuapp.com/">
                <img src={NoteTaker} alt="img" />
              </a>
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Book Search</h1>
              <h2>Group Project</h2>
              <p>
                In this Group project, we created a quick book search that
                allows you to gather together quick relevant information we be
                believed would be required when looking for a book. one of the
                APIs used was a premium which required subscription, so some of
                the elements might not work <br />
                <br />
                Technologies used:
                <br />
                #Html / #Css / #Javascript / #APIs
              </p>
            </div>
            <div class="project-img">
              <a href="https://mohamedisaaq0.github.io/group-project-1/">
                <img src={BookSearch} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
