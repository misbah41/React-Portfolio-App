import React from "react";
import "./Banner.css";
import Typical from "react-typical";
import BannerImg from "./bannerimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="typer-box">
              <h4 className="typedTitle">Hi I'm Misbah Hasan</h4>
              <Typical
                steps={[
                  "Mern Stack Developer",
                  2000,
                  "React, React Hooks",
                  3000,
                  "Node  Express",
                  3000,
                  "Mongodb  Mogoose",
                  3000,
                ]}
                loop={Infinity}
                wrapper="h3"
              />
              <div className="socialBox">
                <div className="social-icon " style={{}}>
                  <a href="https://www.facebook.com/misbah.hasan.7311/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div className="social-icon">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/misbah-hasan-14a09a211/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <a
                
                href="https://drive.google.com/uc?export=download&id=1_iR5Y4KSXmy9M8keDRC_dn3GMM_x4sMy"
                download
                className="resumeBtn"
              >
                Get Resume
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="imgBox-banner">
              <img src={BannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
