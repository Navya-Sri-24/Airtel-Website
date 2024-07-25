import React from 'react';
import logo from '../assets/footer logo.png';
import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';
import './Footer.css';
import rights from '../assets/rigths.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" 
        });
      };
  return (
    <div>
      <hr />
      <div className='bottom'>
        <img src={logo} className='bottomlogo' alt='Footer Logo' />
        <p>Get the app</p>
        <div className='stores'>
          <img src={playstore} alt='Play Store' />
          <img src={appstore} alt='App Store' />
        </div>
        <div className='two'>
          <p>Follow us on</p>
          <div className='logos'>
            <i className="bi bi-facebook black"></i>
            <i className="bi bi-linkedin black"></i>
            <i className="bi bi-youtube black"></i>
            <i className="bi bi-twitter black"></i>
            <i className="bi bi-instagram black"></i>
          </div>
        </div>
        <div className='buttontop'>
            <button onClick={scrollToTop}>Back To Top<i class="bi bi-arrow-up"></i></button>
        </div>
      </div>
      <div>
      <div className='list'>
        <p>Important alerts</p>
        <ul>
            <li>Privacy policy</li>
            <li>Cookie notice</li>
            <li>DLT registration for commercial communication</li>
            <li>Contact us</li>
        </ul>
      </div>
      </div>
      <div className='final'>
      <img src={rights}></img>
      </div>
      
    </div>
  );
}
export default Footer;