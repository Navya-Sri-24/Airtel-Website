import React from 'react';
import './Fourth.css';
import Image1 from '../assets/41.png'; 
import Image2 from '../assets/42.png';
import Image3 from '../assets/43.png';

const Fourth = () => {
  return (
    <div>
      <div className='heading'><h1>Recommended for you</h1></div>
      <div className='box-container'>
        <div className='box'>
          <img src={Image1} alt="Recommendation 1" />
          <div className='button-container1'>
            <button className='button-primary'>BUY NOW</button>
            <button className='button-secondary'>LEARN MORE</button>
          </div>
        </div>
        <div className='box'>
          <img src={Image2} alt="Recommendation 2" />
          <div className='button-container1'>
            <button className='button-primary'>BUY NOW</button>
            <button className='button-secondary'>LEARN MORE</button>
          </div>
        </div>
        <div className='box'>
          <img src={Image3} alt="Recommendation 3" />
          <div className='button-container1'>
            <button className='button-primary'>BUY NOW</button>
            <button className='button-secondary'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
