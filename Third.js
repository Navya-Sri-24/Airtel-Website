import React from 'react';
import './Third.css';
import Image1 from '../assets/31.png';
import Image2 from '../assets/32.png';
import Image3 from '../assets/33.png';
import Image4 from '../assets/34.png';
import Image5 from '../assets/35.png';
import Image6 from '../assets/36.png';
import BoxImage from '../assets/box3.png'; 

const Third = () => {

  return (
    <div>
      <div className='heading'><h1>Buy a new Connection</h1></div>
      <div className='image-container'>
        <button><img src={Image1} alt="Image 1" /></button>
        <button><img src={Image2} alt="Image 2" /></button>
        <button><img src={Image3} alt="Image 3" /></button>
        <button><img src={Image4} alt="Image 4" /></button>
        <button><img src={Image5} alt="Image 5" /></button>
        <button><img src={Image6} alt="Image 6" /></button>
      </div>
      <div className='info-box'>
        <img src={BoxImage} alt="Box Image" className='box-image' />
        <p className='box-text'><b>Switch to Airtel</b><br />Select a plan & order SIM . Get SIM home delivered </p>
        <button className='box-button'>GET STARTED</button>
      </div>
    </div>
  );
};

export default Third;
