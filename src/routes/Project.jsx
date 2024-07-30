import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero heading="PROJECTS" text="Some of my most recent works"></Hero>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
};

export default Project;
