import React from 'react';
import './InternationalExchange.css'; 

const InternationalExchange = () => {
  return (
    <div>
      <div className="banner">
        <img className="banner_img" src={process.env.PUBLIC_URL+"/test.jpg"} alt="test" />
      </div>
      <div className="page-container">
        <h2>国際交流</h2>
      </div>
    </div>
  );
};

export default InternationalExchange;
