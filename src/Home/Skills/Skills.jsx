import React from "react";
import SkillBar from "./SkillBar/SkillBar";
import "./Skills.css";

const skillsData = [
  {
    percentage: 90,
    skillName: "HTML5",
  },
  {
    percentage: 85,
    skillName: "CSS3",
  },
  {
    percentage: 90,
    skillName: "Bootstrap",
  },
  {
    percentage: 75,
    skillName: "JAVASCRIPT",
  },
  {
    percentage: 70,
    skillName: "React Js",
  },
  {
    percentage: 60,
    skillName: "Express Js",
  },
  {
    percentage: 70,
    skillName: "Mongodb",
  },
  {
    percentage: 75,
    skillName: "Firebase",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="TitleDiv">
          <h3 className="service-tiltle text-center">
            My Skills Are Listed Below Here
          </h3>
          <div className="styles-div">
            <span className="shadow"></span>
          </div>
        </div>
        <div className="container">
          <p className="servicesSubTitle">
            Some of My main services are <br />
            listed below. I provide different kind of services.
          </p>
        </div>
        <div className="row">
          {skillsData.map((skillData) => (
            <SkillBar skillData={skillData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
