import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';
import Five from '../assets/5.png';
import Six from '../assets/6.png';
import Seven from '../assets/7.png';
import './Home.css';

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    One,Two,Three,Four,Five,Six,Seven
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Home;
