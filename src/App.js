import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
