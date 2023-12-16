import React from "react";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Category.css";

const Category = () => {
  const Devices = [
    {
      icon: <PhoneIphoneOutlinedIcon />,
      deviceName: "Phone",
    },
    {
      icon: <ComputerIcon />,
      deviceName: "Computer",
    },
    {
      icon: <WatchOutlinedIcon />,
      deviceName: "SmartWacth",
    },

    {
      icon: <PhotoCameraOutlinedIcon />,
      deviceName: "Camera",
    },

    {
      icon: <HeadphonesOutlinedIcon />,
      deviceName: "HeadPhone",
    },
    {
      icon: <SportsEsportsOutlinedIcon />,
      deviceName: "Gaming",
    },
  ];
  return (
    <aside>
      <div className="aside-container">
        <div className="category">
          <div className="fl-c cat-span">
            <span className="price"></span>
            <h3 className="price">Categories</h3>
          </div>
          <Swiper slidesPerView={4} spaceBetween={30} className="s-item-swiper">
            <div className="space-b">
              <h2>Browse By Category</h2>
              <SliderButtons />
            </div>
            {Devices.map((devices, i) => {
              return (
                <SwiperSlide>
                  <div className="space-cln cat-items" key={i}>
                    <span>{devices.icon}</span>
                    <p>{devices.deviceName}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </aside>
  );
};

export default Category;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="slide-btn">
      <div className="fl-c cat-btn">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </div>
  );
};
