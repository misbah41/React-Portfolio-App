import React from "react";

const PortfolioCard = ({ data }) => {
  return (
    <>
      <div className="row projectBg">
        <div className="col-md-6">
          <div className="projectImg">
            <img src={data.imgLink} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="projectContent">
            <h3>{data.name}</h3>
            <p className="techPost">{data.useTech}</p>
            <a className=" prjectBtn" href={data.projectLink}>
               Preview
            </a>
            <a className=" prjectBtn" href={data.client}>
              Client Code
            </a>
            {data.server ? (
              <a className=" prjectBtn" href={data.server}>
                Server Code
              </a>
            ) : (
              <h5 className="condition">Only Frontend</h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
