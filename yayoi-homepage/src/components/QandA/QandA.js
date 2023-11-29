import React from 'react';
import './QandA.css'; 

const QandA = () => {
  return (
    <div>
      <div className="banner">
        <img className="banner_img" src={process.env.PUBLIC_URL+"/test.jpg"} alt="test" />
      </div>
      <div className="page-container">
        <h2>Q&A</h2>
      </div>
    </div>
  );
};

export default QandA
;
