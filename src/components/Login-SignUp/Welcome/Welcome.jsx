import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="wlc-container">
      <div className="wlc-contents">
        <img src="./undraw_Bitcoin_P2P_re_1xqa.png" alt="btc-imge" />
        <div className="wlc-right">
          <h3>Best place to manage your Web3 Assets</h3>
          <p>Manage your Web3 Assets to the level you want to have</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
