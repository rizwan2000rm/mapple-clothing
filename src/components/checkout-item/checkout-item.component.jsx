import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity } = cartItem;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <div className="row">
          <div className="col">
            <div className="arrow" onClick={() => removeItem(cartItem)}>
              &#10094;
            </div>
          </div>
          <div className="col">
            <span className="value">{quantity}</span>
          </div>
          <div className="col">
            <div className="arrow" onClick={() => addItem(cartItem)}>
              &#10095;
            </div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>
          &#10005;
        </div>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
