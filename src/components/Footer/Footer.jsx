import React from "react";
import "./FooterStyles.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Madrid, Spain</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              600.322.342
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              meryrooprada@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me, Maria Roo. Junior Full Stack Developer. I enjoy... Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Officiis est
            quae cum fuga aliquid itaque reprehenderit unde cumque excepturi.
            Officia ex mollitia porro, laboriosam saepe aut illo voluptates
            velit eligendi.{" "}
          </p>
          <div className="social">
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
