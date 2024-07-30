import "./AboutContentStyles.css";
import CV from "../../assets/cv.pdf";
import React from "react";

import Picture from "../../assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg";
import Picture1 from "../../assets/react.jpg";

import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <>
      {" "}
      <div className="about-info grid">
        <div className="about-box">
          <i class="bx bx-award about-icon"></i>
          <h3 className="about-title">Experience</h3>
          <span className="about-subtitle">
            <ul>
              <li>Experiece</li>
              <li>Experiece</li>
              <li>Experiece</li>
              <li>Experiece</li>
            </ul>
          </span>
        </div>

        <div className="about-box">
          <i class="bx bx-award about-icon"></i>
          <h3 className="about-title">Languajes</h3>
          <span className="about-subtitle">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </span>
        </div>
        <div className="about-box">
          <i class="bx bx-award about-icon"></i>
          <h3 className="about-title">Title</h3>
          <span className="about-subtitle">
            {" "}
            <ul>
              <li>Experiece</li>
              <li>Experiece</li>
              <li>Experiece</li>
              <li>Experiece</li>
            </ul>
          </span>
        </div>
        <div className="download-box">
          <a download="" href={CV} className="button">
            Download CV
          </a>
        </div>
      </div>
      <div className="about">
        <div className="about-left">
          <h1>WHo I Am?</h1>
          <p>
            I am a front-end developer. I create responsive secure websites for
            my clients.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={Picture} alt="portfolio-example" className="image" />
            </div>
            <div className="img-stack bottom">
              <img src={Picture1} alt="portfolio-example" className="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
