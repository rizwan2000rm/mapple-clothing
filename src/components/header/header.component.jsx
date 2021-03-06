import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../card-dropdown/card-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import M from "materialize-css/dist/js/materialize.min.js";
import "./header.styles.scss";

class Header extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {
        draggable: true,
        edge: "right"
      });
      // console.log("Header");
    });
    // console.log("Header UseEffect");
  }

  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper teal">
              <Link className="brand-logo" to="/">
                Mapple Clothing
              </Link>
              {/* eslint-disable-next-line */}
              <a
                data-target="slide-out"
                className="sidenav-trigger right click"
              >
                <i className="material-icons">menu</i>
              </a>

              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/shop">
                    <i className="material-icons left">store</i>
                    SHOP
                  </Link>
                </li>

                <li>
                  {this.props.currentUser ? (
                    <Link
                      className="option click"
                      onClick={() => auth.signOut()}
                    >
                      <i className="material-icons left">login</i>
                      SIGN OUT
                    </Link>
                  ) : (
                    <Link className="option" to="/signin">
                      <i className="material-icons left">login</i>
                      LOGIN
                    </Link>
                  )}
                </li>
                <li className="cart">
                  <CartIcon />
                </li>
                {this.props.hidden ? null : <CartDropdown />}
              </ul>
            </div>
          </nav>
        </div>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img
                  className="materialboxed"
                  width="300"
                  alt="background"
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
              </div>
              <h3>
                <img
                  className="circle"
                  alt="logo"
                  src="https://png.pngtree.com/template/20190927/ourlarge/pngtree-initials-letter-m-logo-vector-template-designs-image_311990.jpg"
                />
              </h3>
              <a href="/">
                <span className="name">Mapple Clothing</span>
              </a>
              <a href='mailto:enquiries.mappleclothing@gmail.com?subject="Enquiry"'>
                enquiries.mappleclothing@gmail.com
              </a>
            </div>
          </li>
          <li>
            <a href="/shop">
              <i className="material-icons left">store</i>
              SHOP
            </a>
          </li>

          <li>
            {this.props.currentUser ? (
              // eslint-disable-next-line
              <a className="option click" onClick={() => auth.signOut()}>
                <i className="material-icons left">login</i>
                SIGN OUT
              </a>
            ) : (
              <a className="option" href="/signin">
                <i className="material-icons left">login</i>
                LOGIN
              </a>
            )}
          </li>
          <li className="cart">
            <a className="option" href="/checkout">
              <i className="material-icons shopping-icon">shopping_cart</i>
              CART
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);
