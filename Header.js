import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const explores = ["Thanks App", "Airtel Payments Bank", "XStream", "Wynk"];

  return (
    <div className="header-container">
      <div className="initial">
        <p>INDIVIDUAL</p>
        <p>BUSINESS</p>
        <p>INVESTOR</p>
      </div>
      <div className="explore">
        <a>
          <i className="bi bi-grid red"></i> Explore Airtel
        </a>
        <div className="dropdown-menu">
          <ul>
            {explores.map((explore) => (
              <li key={explore}>{explore}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
