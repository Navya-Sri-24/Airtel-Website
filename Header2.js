import React from "react";
import logo from "../assets/logo.png";
import "./Header2.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header2 = () => {
  const AirtelBlacks = ["Pay Bill", "View Plans"];
  const PrePaids = [
    "Recharge",
    "New Prepaid SIM",
    "View Plans",
    "International Roaming",
    "Switch Prepaid to Postpaid",
    "Port to Airtel Prepaid",
  ];
  const PostPaids = [
    "Pay Bill",
    "Buy New Connection",
    "View Plans",
    "International Roaming",
    "Switch Prepaid to Postpaid",
    "Port to Airtel",
    "Free Sim Delivery",
  ];
  const Broadbands = ["Pay Bill/ Recharge", "Buy New Connection", "View Plans"];
  const Dths = [
    "Recharge",
    "Buy New DTH Connection",
    "View Plans",
    "XStream",
    "Buy Second DTH connection",
  ];
  const Banks = ["View Account", "Get New Account", "Add Money", "Know More"];
  const AirtelFinances = ["Credit Card", "Get Loans", "Know More"];
  const Accounts = ["Login", "Recharge", "Help"];

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="AirtelBlack">
            Airtel Black <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu1">
              <ul>
                {AirtelBlacks.map((AirtelBlack) => (
                  <li key={AirtelBlack}>{AirtelBlack}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="PrePaid">
            Pre Paid <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu2">
              <ul>
                {PrePaids.map((PrePaid) => (
                  <li key={PrePaid}>{PrePaid}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="PostPaid">
            Post Paid <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu3">
              <ul>
                {PostPaids.map((PostPaid) => (
                  <li key={PostPaid}>{PostPaid}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="BroadBand">
            Broad Band <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu4">
              <ul>
                {Broadbands.map((BroadBand) => (
                  <li key={BroadBand}>{BroadBand}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="dth">
            DTH <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu5">
              <ul>
                {Dths.map((dth) => (
                  <li key={dth}>{dth}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="Bank">
            Bank <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu6">
              <ul>
                {Banks.map((Bank) => (
                  <li key={Bank}>{Bank}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="Airtelfinance">
            Airtel Finance <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu7">
              <ul>
                {AirtelFinances.map((Airtelfinance) => (
                  <li key={Airtelfinance}>{Airtelfinance}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="Account">
            <i className="bi bi-person-circle red"></i> Account <i className="bi bi-chevron-down"></i>
            <div className="dropdown-menu8">
              <ul>
                {Accounts.map((Account) => (
                  <li key={Account}>{Account}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
