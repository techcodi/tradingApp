import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Sales.css";

const Sales = () => {
  const itemsData = [
    {
      offDiscount: "-40%",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
      itemName: " The North Coat",
      itemPrice: "$120",
      itemDiscount: "$160",
      Rate: <StarOutlinedIcon />,
      reviews: "(88)",
    },
    {
      offDiscount: "-35%",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png",
      itemName: "Gucci duffle bag",
      itemPrice: "$960",
      itemDiscount: "$1160",
      Rate: <StarOutlinedIcon />,
      reviews: "(75)",
    },
    {
      offDiscount: "-30%",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./gammaxx-l240-argb-1-500x500 1.png",
      itemName: "RBG liquid CPU Cooler",
      itemPrice: "$160",
      itemDiscount: "$180",
      Rate: <StarOutlinedIcon />,
      reviews: "99",
    },
    {
      offDiscount: "-20%",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
      itemName: "Small BookSelf",
      itemPrice: "$360",
      itemDiscount: "$400",
      Rate: <StarOutlinedIcon />,
      reviews: "(99)",
    },
    {
      offDiscount: "-35%",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./ak-900-01-500x500 1.png",
      itemName: "AK-900 Wired Keyboard",
      itemPrice: "$960",
      itemDiscount: "$1160",
      Rate: <StarOutlinedIcon />,
      reviews: "(75)",
    },
  ];
  return (
    <main className="m-sales">
      <div className="sales-container">
        <div className="fl-c cat-span">
          <span className="price"></span>
          <h3 className="price">Today's</h3>
        </div>
        <div className="sales-items">
          <Swiper
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              750: {
                slidesPerView: 2,
              },
              800: {
                slidePerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={40}
            className="s-item-swiper"
          >
            <div className="space-b">
              <h1>Today's Sales</h1>
              <SliderButtons />
            </div>

            {itemsData.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="item-packs"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <div className="space-s">
                    <small className="main-cl">{item.offDiscount}</small>
                    <div className="space-cln">
                      <small className="emoji">{item.loveEmoji}</small>
                      <small className="emoji">{item.eyeEmoji}</small>
                    </div>
                  </div>
                  <div className="card-img">
                    {" "}
                    <img src={item.item} alt="prodcuts" />{" "}
                  </div>
                </div>

                <div className="space-cln item-details">
                  <b>{item.itemName}</b>
                  <span className="fl-c price">
                    {item.itemPrice}
                    <span className="bar" style={{ color: "#556" }}>
                      {item.itemDiscount}
                    </span>
                  </span>
                  <div className="fl-c">
                    {" "}
                    <span>
                      {" "}
                      <b className="star">{item.Rate}</b>
                      <b className="star">{item.Rate}</b>
                      <b className="star">{item.Rate}</b>
                      <b className="star">{item.Rate}</b>
                    </span>
                    <small style={{ color: "#556" }}> {item.reviews}</small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="space-cln view-more">
          <button className="main-cl ">View More Products</button>
        </div>
      </div>
    </main>
  );
};

export default Sales;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="slide-btn">
      <div className="fl-c s-btn">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </div>
  );
};
