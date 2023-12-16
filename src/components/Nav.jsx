import React from "react";
import "./Welcome.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from "react-redux";

const Nav = () => {
  // const cartItems = useSelector((state) => state.cart.cart);

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    console.log("no result");
  };
  return (
    <nav>
      <div className="space-b nav-cont">
        <div className="nav-l">
          <h2>Exclusive</h2>
        </div>
        <div className="nav-r">
          <ul className="space-b">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="space-b nav-input">
          <form onSubmit={onChange} className="fl-c" name="form">
            <input
              name="search"
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="What are you looking for ?"
            />
            <SearchOutlinedIcon />
          </form>
          <span className="nav-love">
            {" "}
            <FavoriteBorderOutlinedIcon />
          </span>
          <span>
            {" "}
            <Link to="/products">
              <ShoppingCartOutlinedIcon />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
