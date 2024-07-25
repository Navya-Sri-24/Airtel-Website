import React from "react";
import "./Fifth.css";
import Image1 from "../assets/51.png"; 
import Image2 from "../assets/52.png";
import Image3 from "../assets/53.png";
import Image4 from "../assets/54.png";

const Fifth = () => {
  return (
    <div>
      <div className="Main">
        <h1>For Your business</h1>
        <p>Solutions for Medium to large scale enterprises</p>
        <a className="blue">
          EXPLORE AIRTEL BUSINESS <i class="bi bi-chevron-right blue"></i>
        </a>
      </div>
      <div className="image-row">
      <div className="image-container1">
        <img src={Image1} alt="Image 1" className="zoom-img" />
      </div>
      <div className="image-container1">
        <img src={Image2} alt="Image 2" className="zoom-img" />
      </div>
      <div className="image-container1">
        <img src={Image3} alt="Image 3" className="zoom-img" />
      </div>
      <div className="image-container1">
        <img src={Image4} alt="Image 4" className="zoom-img" />
      </div>
    </div>
    </div>
  );
};

export default Fifth;
