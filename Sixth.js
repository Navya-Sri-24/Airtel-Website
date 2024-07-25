import React from "react";
import "./Sixth.css";

const RowsComponent = () => {
  const rowsData = [
    {
      heading: "Quick Access",
      subSentences: [
        "AirtelBlack Bill Payment",
        "Prepaid Recharge",
        "Postpaid Bill Payment",
        "DTH Recharges",
        "Broadband Payment",
        "Exciting Offers",
        "Personal Loans",
        "Airtel Payments Bank",
        "Airtel Thanks App",
        "Free SIM Delivery",
        "Telecom Tariff",
        "Rights Issue",
        "QIP & FCCB Issue",
        "Terms & Conditions",
        "Airtel Blogs",
      ],
    },
    {
      heading: "Help At Hand",
      subSentences: [
        "Find a store",
        "Check Coverage",
        "Ownership Transfer",
        "Manage your account",
        "ISP Near Me",
        "Wynk Music",
        "Broadband FAQs",
        "DTH FAQs",
        "Airtel Xstream FAQs",
        "Postpaid FAQs",
        "Stores Near me",
        "DTH Consumer Corner",
        "Do not disturb",
      ],
    },
    {
      heading: "About Airtel",
      subSentences: [
        "Brand",
        "Career",
        "Partner",
        "Business",
        "About Airtel",
        "Press Release",
        "Investor",
        "Investor Support",
        "Telecom Charter",
      ],
    },
    {
      heading: "New Connections",
      subSentences: [
        "Buy DTH New Connection",
        "Buy Prepaid New Connection",
        "Buy Postpaid New Connection",
        "Buy Fiber New Connection",
        "Buy Airtel Black Plan",
        "Buy Xstream Box",
        "Switch to Airtel",
        "International Roaming",
      ],
    },
  ];

  return (
    <div className="rows-container">
      {rowsData.map((row, index) => (
        <div className="column" key={index}>
          <h2>{row.heading}</h2>
          <div className="sub-sentences">
            {row.subSentences.map((sentence, subIndex) => (
              <p key={subIndex}>{sentence}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowsComponent;
