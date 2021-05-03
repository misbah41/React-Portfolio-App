import React from "react";
import AboutImg from "../Banner/bannerimg.png";
import "./About.css";

const aboutPost = ` Hello, I am Misbah Hasan, I have been working as a JavaScript developer for the last 1 year.. 
i have solid experience in modern technology with react js.. And I have a good idea about the various libraries of React Js like material ui react bootstrap and npm.. 
I'm always interested in learning new things I like to learn new things and I'm a little more interested in technology `;

const aboutSubPost = `Apart from that I have quite good skills in modern UI design.. 
I love to do clean code, clean design and project organize.. Other than that I like to tidy up and keep everything tidy`;

const About = () => {
  return (
    <section id="about">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="about-imgBox">
              <img src={AboutImg} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h3 className="about-title">All You Need To Know About Me</h3>
              <p className="about-post">{aboutPost}</p>
              <p className="about-post subPost">{aboutSubPost}</p>
              <a
                style={{ display: "block", width: "50%", textAlign: "center" }}
                href="https://drive.google.com/uc?export=download&id=1_iR5Y4KSXmy9M8keDRC_dn3GMM_x4sMy"
                download
                className="resumeBtn"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
