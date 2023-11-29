import React from 'react';
import './Access.css'; 
import GoogleMap from './GoogleMap';

const Access = () => {
  return (
    <div>
      <div className="banner">
        <img className="banner_img" src={process.env.PUBLIC_URL+"/test.jpg"} alt="test" />
      </div>
      <div className="page-container">
        <h2>アクセス</h2>
        <div className="section-container">
        <h3>
          <ul>113-0032</ul>
          <ul>東京都文京区弥生1－5－11</ul>
          <ul>やよい在宅クリニック</ul>
          <GoogleMap />
        </h3>
        <p></p>
      </div>
      </div>
    </div>
  );
};

export default Access
;
