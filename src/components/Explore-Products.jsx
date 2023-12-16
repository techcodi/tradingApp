import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "./Explore.css";

const ExploreProducts = () => {
  const ProductsData = [
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./71RdoeXxtrL 1.png",
      itemName: " Bread Dry Dog Food",
      itemPrice: "$100",

      Rate: <StarOutlinedIcon />,
      reviews: "(88)",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./eos-250d-03-500x500 1.png",
      itemName: "CANON DLSR Camera",
      itemPrice: "$360",

      Rate: <StarOutlinedIcon />,
      reviews: "(95)",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./ideapad-gaming-3i-01-500x500 1.png",
      itemName: "ASUS FHD Gaming  Laptop",
      itemPrice: "$760",

      Rate: <StarOutlinedIcon />,
      reviews: "99",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./eos-250d-03-500x500 1.png",
      itemName: "CANON DLSR Camera",
      itemPrice: "$360",
      Rate: <StarOutlinedIcon />,
      reviews: "(99)",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
      itemName: "Kids Electric Car",
      itemPrice: "$960",
      Rate: <StarOutlinedIcon />,
      reviews: "(75)",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
      itemName: "Kids Electric Car",
      itemPrice: "$960",
      Rate: <StarOutlinedIcon />,
      reviews: "(75)",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./GP11_PRD3 1.png",
      itemName: "Kids Electric Car",
      itemPrice: "$960",
      Rate: <StarOutlinedIcon />,
      reviews: "(75)",
    },
    {
      offDiscount: "New",
      loveEmoji: <FavoriteBorderOutlinedIcon />,
      eyeEmoji: <VisibilityOutlinedIcon />,
      item: "./Copa_Sense 1.png",
      itemName: "Kids Electric Car",
      itemPrice: "$960",

      Rate: <StarOutlinedIcon />,
      reviews: "(75)",
    },
  ];

  return (
    <div className="products-section">
      <div className="pro-container">
        <div className="products">
          {ProductsData.map((products) => {
            return (
              <div className="products-card ">
                <div
                  className="pro-card"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <div className="space-s pro-top">
                    <span className="pro-dis">{products.offDiscount}</span>
                    <div className="space-cln">
                      <span className="emoji">{products.eyeEmoji}</span>
                      <span className="emoji">{products.loveEmoji}</span>
                    </div>
                  </div>
                  <img src={products.item} alt="products" />
                </div>
                <div className="produts-detail">
                  <b className="p-name">{products.itemName}</b>
                  <div className="fl-c">
                    <span className="price">{products.itemPrice}</span>
                    <span className="star">
                      {products.Rate} {products.Rate} {products.Rate}{" "}
                      {products.Rate}{" "}
                    </span>
                    <span className="review">{products.reviews}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-cln view-more">
          <button className="main-cl ">View More Products</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
