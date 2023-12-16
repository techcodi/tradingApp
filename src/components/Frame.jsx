import React from "react";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="frame">
      <div className="space-b frame-container">
        <div className="frame-first-div">
          <b style={{ fontSize: "1.2rem", color: "#00ff66" }}>Categories</b>
          <h2>Enhance Your Music Experience</h2>
          <div className="space-b span-b">
            <span className="span">
              {" "}
              <b>23 </b> <small>Hours</small>
            </span>
            <span className="span">
              <b>05</b> <small>Days</small>
            </span>
            <span className="span span-s">
              {" "}
              <b>59</b> <small>Minutes</small>
            </span>
            <span className="span span-s">
              {" "}
              <b>35</b> <small>Seconds</small>
            </span>
          </div>
          <button className="frame-btn">Buy Now!</button>
        </div>
        <div className="frame-right">
          <img src="./JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="speaker" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
