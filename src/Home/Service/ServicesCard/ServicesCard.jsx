import React from "react";

const ServicesCard = ({ data }) => {
  return (
    <div className="serviceCard">
      <div className="card-icon">
        <img src={data.servIcon} alt="" />
      </div>
      <div className="card-content">
        <h4 className='card-title'>{data.serviceTitle}</h4>
        <small>{data.servPost}</small>
      </div>
    </div>
  );
};

export default ServicesCard;
