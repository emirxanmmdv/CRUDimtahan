import React from "react";
import { NavLink } from "react-router-dom";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import "./index.scss";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/add"}>ADD</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/wishlist"}>
        <CiHeart />
      </NavLink>
      <CiShoppingBasket />
    </nav>
  );
};

export default Navbar;
