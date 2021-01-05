import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const navbarRight = document.querySelector(".navbar--right");

    menu.classList.toggle("open");
    navbarRight.classList.toggle("show");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header class="container">
      <nav class="navbar">
        <Link to="/" class="navbar--brand navbar--item">
          Mapple Clothing
        </Link>
        <ul class="navbar--right">
          <Link to="/shop" class="flex navbar--item">
            <i className="material-icons left">store</i>
            <li>SHOP</li>
          </Link>
          {currentUser ? (
            <Link className="flex navbar--item" onClick={() => auth.signOut()}>
              <i className="material-icons left">login</i>
              <li>SIGN OUT</li>
            </Link>
          ) : (
            <Link className="flex navbar--item" to="/signin">
              <i className="material-icons left">login</i>
              <li>LOGIN</li>
            </Link>
          )}
          <li className="cart">
            {/* <a className="option" href="/checkout"></a> */}
            <CartIcon />
          </li>
          {hidden ? null : <CartDropdown />}
        </ul>
        <div class="menu" onClick={toggleMenu}>
          <span class="menu--burger"></span>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);

/* <img
className="materialboxed"
width="300"
alt="background"
src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
/>

<img
className="circle"
alt="logo"
src="https://png.pngtree.com/template/20190927/ourlarge/pngtree-initials-letter-m-logo-vector-template-designs-image_311990.jpg"
/> */
