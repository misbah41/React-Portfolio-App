import React from "react";

const PortfolioCard = ({ data }) => {
  return (
    <div className="projectCardBox">
      <div className="projectImg">
        <img src={data.imgLink} alt="" />
      </div>
      <div className="projectContent">
        <h3>{data.name}</h3>
        <p className='techPost'>{data.useTech}</p>
        <a className='resumeBtn prjectBtn' href={data.projectLink}>Live Preview</a>
        <a className='resumeBtn prjectBtn' href={data.client}>Client Code</a>
        {
          data.server?<a className='resumeBtn prjectBtn' href={data.server}>Server Code</a>: <h5 className='condition'>Only Frontend</h5>
        }
      </div>
    </div>
  );
};

export default PortfolioCard;
