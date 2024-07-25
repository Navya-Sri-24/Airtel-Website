import React, { useState } from "react";
import "./card.css";
import Bg from "../assets/card.jpg";

const Card = () => {
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const [selectedButtonsCard1, setSelectedButtonsCard1] = useState({});
  const [selectedButtonsCard2, setSelectedButtonsCard2] = useState({});

  const handleCard1ButtonClick = (button) => {
    setSelectedButtonsCard1((prevState) => ({
      prevState,
      [button]: !prevState[button],
    }));
    setShowCard2(true);
  };

  const handleCard2ButtonClick = (button) => {
    setSelectedButtonsCard2((prevState) => ({
      prevState,
      [button]: !prevState[button],
    }));
    setShowCard3(true);
  };

  return (
    <div className={`card-containerc ${showCard3 ? "show-card3" : ""}`}>
      <div className="bg">
        <img src={Bg} alt="Background" />
        <p>Find the best fiber plan for you</p>
      </div>
      <div className={`card1 ${showCard3 ? "move-left" : ""}`}>
        <p className="s1">STEP 1 OF 2</p>
        <p className="s2">
          How many devices are you looking to connect to your wi-fi?
        </p>
        <p>laptops, TVs, mobiles</p>
        <button
          className={`btn1 ${selectedButtonsCard1["1-5"] ? "selected" : ""}`}
          onClick={() => handleCard1ButtonClick("1-5")}
        >
          1-5
        </button>
        <button
          className={`btn1 ${selectedButtonsCard1["6-10"] ? "selected" : ""}`}
          onClick={() => handleCard1ButtonClick("6-10")}
        >
          6-10
        </button>
        <button
          className={`btn1 ${selectedButtonsCard1["10+"] ? "selected" : ""}`}
          onClick={() => handleCard1ButtonClick("10+")}
        >
          10+
        </button>
      </div>
      {showCard2 && (
        <div className={`card2 ${showCard3 ? "move-left" : ""}`}>
          <p className="s1">STEP 2 OF 2</p>
          <p className="s2">What do you plan to use the connection for?</p>
          <p>select all that apply</p>
          <button
            className={`btn1 ${
              selectedButtonsCard2["General Browsing"] ? "selected" : ""
            }`}
            onClick={() => handleCard2ButtonClick("General Browsing")}
          >
            General Browsing
          </button>
          <button
            className={`btn1 ${
              selectedButtonsCard2["Gaming"] ? "selected" : ""
            }`}
            onClick={() => handleCard2ButtonClick("Gaming")}
          >
            Gaming
          </button>
          <button
            className={`btn1 ${
              selectedButtonsCard2["Netflix, Hotstar etc."] ? "selected" : ""
            }`}
            onClick={() => handleCard2ButtonClick("Netflix, Hotstar etc.")}
          >
            Netflix, Hotstar etc.
          </button>
          <button
            className={`btn1 ${
              selectedButtonsCard2["Work from home"] ? "selected" : ""
            }`}
            onClick={() => handleCard2ButtonClick("Work from home")}
          >
            Work from home
          </button>
        </div>
      )}
      {showCard3 && (
        <div className="card3">
          <h1>
            <i className="bi bi-wifi pink"></i>
          </h1>
          <p className="s31">
            <b>The best plan for you is</b>{" "}
          </p>
          <p className="s32">
            <b>200 Mbps</b>
          </p>
          <p>Rs. 999 per month</p>
          <button className="get">GET STARTED</button>
          <button className="view">VIEW OTHER PLANS</button>
        </div>
      )}
    </div>
  );
};

export default Card;