import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      <SocialLinks />


    </div> 
  );
}

export default App;
