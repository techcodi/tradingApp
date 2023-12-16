import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../CreateContext";
import { ITEMCARD } from "../ItemsCard";
import CartItems from "./Cart-Items";
const SingleItem = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="single-product">
      <div className="cart-shopping-conatainer">
        {ITEMCARD.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItems data={item} />;
          }
        })}
      </div>
      <div className="checkout">
        <p> SubTotal:${totalAmount} </p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default SingleItem;
