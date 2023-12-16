import React from "react";
import "./Arrive.css";

const NewArrival = () => {
  return (
    <article>
      <div className="fl-c cat-span">
        <span className="price"></span>
        <h3 className="price"> Feature</h3>
      </div>
      <h2>New Arrival</h2>
      <div className="space-b new-container">
        <div className="new-f-left">
          <div className="f-left-img game">
            <img
              src="./ps5-slim-goedkope-playstation_large 1.png"
              alt="playStstion"
            />
          </div>
          <div className="new-left-details">
            <big>Play Station 5</big>
            <small>
              Black and White version of the PS5 coming out on sale.
            </small>
            <a href="/">Shop Now</a>
          </div>
        </div>
        {/*  */}

        <div className="new-right">
          <div className="new-f-left new-w">
            <div className="f-left-img game2">
              <img
                src="./attractive-woman-wearing-hat-posing-black-background 1.png"
                alt="playStstion"
              />
            </div>
            <div className="new-left-details">
              <big>Women’s Collections</big>
              <small>Featured woman collections.</small>
              <a href="/">Shop Now</a>
            </div>
          </div>
          {/*  */}
          <div className="rigth-down">
            <div className="space-b rigth-down1">
              <div className="new-f-left new-d1">
                <div className="f-left-img">
                  <img
                    src="./69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                    alt="playStstion"
                  />
                </div>
                <div className="new-left-details">
                  <big>Speakers</big>
                  <small>Amazon wireless speakers</small>
                  <a href="/">Shop Now</a>
                </div>
              </div>
              {/*  */}
              <div className="new-f-left new-d2">
                <div className="f-left-img">
                  <img
                    src="./652e82cd70aa6522dd785109a455904c.png"
                    alt="playStstion"
                  />
                </div>
                <div className="new-left-details">
                  <big>Perfume</big>
                  <small>GUCCI INTENSE OUD EDP</small>
                  <a href="/">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewArrival;
