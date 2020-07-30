import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="col s12 m6 l4">
      <div className="card hoverable">
        <div
          className="card-image image-height"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <h6>Price: ${price}/-</h6>
          {/* eslint-disable-next-line */}
          <a
            class="waves-effect waves-light btn teal"
            onClick={() => addItem(item)}
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
