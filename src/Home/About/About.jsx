import React from "react";
import AboutImg from "../Banner/bannerimg.png";
import "./About.css";

const aboutPost = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
asperiores quod ratione? Eius eos obcaecati fugiat placeat rerum
corrupti animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quae.`;

const aboutSubPost = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Perspiciatis maiores quis, ducimus dolor fugiat in minima.
Voluptatibus ad sed sapiente laborum quos. At consequatur magnam
harum eum, ratione rem illo!`;

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-imgBox">
              <img src={AboutImg} alt="" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-content">
              <h3 className="about-title">All You Need To Know About Me</h3>
              <p className="about-post">{aboutPost}</p>
              <p className="about-post subPost">{aboutSubPost}</p>
              <button
                href="https://drive.google.com/file/d/1_iR5Y4KSXmy9M8keDRC_dn3GMM_x4sMy/view"
                download
                className="resumeBtn"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
