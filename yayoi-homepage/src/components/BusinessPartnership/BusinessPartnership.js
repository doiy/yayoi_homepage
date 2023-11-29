import React from 'react';
import './BusinessPartnership.css'; 

const BusinessPartnership
= () => {
  return (
    <div>
      <div className="banner">
        <img className="banner_img" src={process.env.PUBLIC_URL+"/test.jpg"} alt="test" />
      </div>
      <div className="page-container">
        <h2>業務提携</h2>
      </div>
    </div>
  );
};

export default BusinessPartnership
;
