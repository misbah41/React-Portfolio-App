import React from "react";
import "./Banner.css";
import Typical from "react-typical";
import BannerImg from "./bannerimg.png";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
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
              <button
                href="https://drive.google.com/file/d/1_iR5Y4KSXmy9M8keDRC_dn3GMM_x4sMy/view"
                download
                className="resumeBtn"
              >
                Get Resume
              </button>
            </div>
          </div>
          <div className="col-sm-6">
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
