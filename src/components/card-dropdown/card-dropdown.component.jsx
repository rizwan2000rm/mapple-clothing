import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./card-dropdown.styles.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-tems" />
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default Cart;
