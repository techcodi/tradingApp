import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Sales.css";
import { ITEMCARD } from "../ItemsCard";
import Product from "./Product";
// import { sliderSettings } from "../Redux/Slides";

const Sales = () => {
  return (
    <main className="m-sales">
      <div className="sales-container">
        <div className="fl-c cat-span">
          <span className="price"></span>
          <h3 className="price">Today's</h3>
          <big>Count:</big>
        </div>
        <div className="sales-items">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              775: {
                slidesPerView: 2,
              },

              1100: {
                slidesPerView: 4,
              },
            }}
            className="s-item-swiper"
          >
            <div className="space-b">
              <h1>Flash Sales</h1>
              <SliderButtons />
            </div>

            {ITEMCARD.map((item) => (
              <SwiperSlide>
                <Product data={item} />
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
