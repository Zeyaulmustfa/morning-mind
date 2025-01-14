import React from "react";
import "./FCard.css";
import myimg1 from "../assets/28Website.png";
import myimg2 from "../assets/19Mobile.png";
import myimg3 from "../assets/21program.png";
import myimg4 from "../assets/45Editing.png";

const FCard = () => {
  return (
    <section className="f-card">
      <div className="features">
        <div className="features-card">
          <img src={myimg1} alt="fireSpot" />
          <p>Quality Assurance</p>
        </div>
        <div className="features-card">
          <img src={myimg2} alt="fireSpot" />
          <p>Competitive Pricing</p>
        </div>
        <div className="features-card">
          <img src={myimg3} alt="fireSpot" />
          <p>Experienced Team</p>
        </div>
        <div className="features-card">
          <img src={myimg4} alt="fireSpot" />
          <p>Excellent supporting</p>
        </div>
      </div>
    </section>
  );
};

export default FCard;
