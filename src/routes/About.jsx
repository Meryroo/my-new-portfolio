import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import AboutContent from "../components/About/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero heading="ABOUT" text="I am a friendly Front-End Developer"></Hero>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  );
};

export default About;
