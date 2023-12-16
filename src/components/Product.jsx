import React from "react";
import { useContext } from "react";
import { ShopContext } from "../CreateContext";

const Product = (props) => {
  const {
    id,
    image,
    loveEmoji,
    offDiscount,
    itemDiscount,
    Rate,
    reviews,
    eyeEmoji,
    itemName,
    itemPrice,
  } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div>
      <div className="item-packs" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="space-s">
          <small className="main-cl">{offDiscount}</small>
          <div className="space-cln">
            <small className="emoji">{loveEmoji}</small>
            <small className="emoji">{eyeEmoji}</small>
          </div>
        </div>
        <div className="card-img">
          <img src={image} alt="prodcuts" />
        </div>
      </div>

      <button className="bg-black" onClick={() => addToCart(id)}>
        Add to card {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

      {/* to={`/product/${item.id}`} */}
      <div className="item-details">
        <b>{itemName}</b>
        <span className="fl-c price">
          {itemPrice}
          <span className="bar" style={{ color: "#556" }}>
            {itemDiscount}
          </span>
        </span>
        <div className="fl-c">
          {" "}
          <span>
            {" "}
            <b className="star">{Rate}</b>
            <b className="star">{Rate}</b>
            <b className="star">{Rate}</b>
            <b className="star">{Rate}</b>
          </span>
          <small style={{ color: "#556" }}> {reviews}</small>
        </div>
      </div>
    </div>
  );
};

export default Product;
