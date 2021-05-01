import React from 'react';

const SocialIcon = ({data}) => {
  return (
    <div className='addressBox'>
      <div className="locatImg">
        <img src={data.socialIcon} alt=""/>
      </div>
      <div className="locatContent">
        <h5 className='lacateTitle'>{data.socialTitle}</h5>
        <small className='location'>{data.socialInfo}</small>
      </div>
    </div>
  );
};

export default SocialIcon;