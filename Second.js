import React, { useState } from 'react';
import './Second.css';

const Second = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div>
      <div className='heading'><h1>Recharge or pay bills</h1></div>
      <div className='button-container'>
        <button className={activeButton === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)}>Prepaid</button>
        <button className={activeButton === 2 ? 'active' : ''} onClick={() => handleButtonClick(2)}>Postpaid</button>
        <button className={activeButton === 3 ? 'active' : ''} onClick={() => handleButtonClick(3)}>DTH</button>
        <button className={activeButton === 4 ? 'active' : ''} onClick={() => handleButtonClick(4)}>Fiber</button>
        <button className={activeButton === 5 ? 'active' : ''} onClick={() => handleButtonClick(5)}>Airtel Black</button>
      </div>
      {activeButton !== null && (
        <div className='input-field-container'>
          <input type='text' placeholder={`Enter Mobile Number`} />
          <br />
          {activeButton === 1 && <button className="submit-button">Recharge</button>}
          {activeButton === 2 && <button className="submit-button">Pay Bill</button>}
          {activeButton === 3 && <button className="submit-button">Recharge</button>}
          {activeButton === 4 && <button className="submit-button">Pay Bill</button>}
          {activeButton === 5 && <button className="submit-button">Pay Bill</button>}
        </div>
      )}
      <div className='footer'>
        <p>Free 2GB data coupons on select recharges via Thanks app</p>
        <button>GET APP</button>
      </div>
    </div>
  );
};

export default Second;