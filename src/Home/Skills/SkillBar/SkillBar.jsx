import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
const SkillBar = ({skillData}) => {
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="skillBar text-center">
        <CircularProgressbar value={skillData.percentage} text={`${skillData.percentage}%`} />
        <h4 className="skillName mt-3">{skillData.skillName}</h4>
      </div>
    </div>
  );
};

export default SkillBar;
