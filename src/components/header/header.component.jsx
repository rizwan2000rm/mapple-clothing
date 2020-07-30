import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../card-dropdown/card-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  useEffect(() => {
    const M = window.M;

    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line
      const instances = M.Sidenav.init(elems, {
        draggable: true,
        edge: "right"
      });
    });
  }, []);

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div class="nav-wrapper teal">
            <Link class="brand-logo" to="/">
              Mapple Clothing
            </Link>
            <a href="/" data-target="slide-out" class="sidenav-trigger right">
              <i class="material-icons">menu</i>
            </a>

            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/shop">
                  <i className="material-icons left">store</i>
                  SHOP
                </Link>
              </li>

              <li>
                {currentUser ? (
                  <Link className="option click" onClick={() => auth.signOut()}>
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
              {hidden ? null : <CartDropdown />}
            </ul>
          </div>
        </nav>
      </div>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                class="materialboxed"
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
          {currentUser ? (
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
            <i class="material-icons shopping-icon">shopping_cart</i>
            CART
          </a>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);
