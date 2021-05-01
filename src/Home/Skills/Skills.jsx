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
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h3 className='text-center'>My Skills Are Listed Below Here</h3>
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
