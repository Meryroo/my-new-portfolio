import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../../assets/firosnv-photography-1wBmbnvv4TE-unsplash.jpg";

import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro" src={IntroImg} alt="intro" />
      </div>
      <div className="content">
        <p>HI, I`M MARIA</p>
        <h1>Front End Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
