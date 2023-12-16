import React from "react";
import { useContext } from "react";
import { ShopContext } from "../CreateContext";
const CartItems = (props) => {
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

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="center cart-handle">
      <div className="cart space-b">
        <img src={image} alt="" />
        <div className="">
          <div className="">
            <p>{itemName}</p>
            <p>{itemPrice}</p>
          </div>
          <div>
            <button onClick={() => addToCart(id)}>+</button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => removeFromCart(id)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
