import React from "react";
import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Header = () => {
  const dataSwiper = [
    {
      logo: "./1200px-Apple_gray_logo 1.png",
      logoName: "iPhone 14 Series",
      discount: "Up to 10% off Voucher",
      shop: "Shop Now",
      product: "./hero_endframe__cvklg0xk3w6e_large 2.png",
    },
    {
      logo: "./1200px-Apple_gray_logo 1.png",
      logoName: "iPhone 14 Series",
      discount: "Up to 10% off Voucher",
      shop: "Shop Now",
      product: "./hero_endframe__cvklg0xk3w6e_large 2.png",
    },
    {
      logo: "./1200px-Apple_gray_logo 1.png",
      logoName: "JBL Pro Series",
      discount: "Enhance Your Music Experience",
      shop: "Shop Now",
      product: "./JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png",
    },
    {
      logo: "./1200px-Apple_gray_logo 1.png",
      logoName: "iPhone 14 Series",
      discount: "Up to 10% off Voucher",
      shop: "Shop Now",
      product: "./hero_endframe__cvklg0xk3w6e_large 2.png",
    },
  ];
  return (
    <div className="header">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1000 }}
      >
        {dataSwiper.map((swiperCard, i) => {
          return (
            <SwiperSlide className="swiper-slide">
              <div className="space-b swipe" key={i}>
                <div className="s-left">
                  <div className="fl-c">
                    <img src={swiperCard.logo} alt="logo" />
                    <span>{swiperCard.logoName}</span>
                  </div>
                  <h3>{swiperCard.discount}</h3>
                  <p
                    className="fl-c h-p"
                    style={{
                      color: "#fff",

                      textAlign: "left",
                      gap: "0px",
                    }}
                  >
                    {swiperCard.shop}
                    <ArrowRightAltOutlinedIcon />
                  </p>
                </div>
                <div className="s-right">
                  {" "}
                  <img src={swiperCard.product} alt="products" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Header;
