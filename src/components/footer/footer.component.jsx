import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="page-footer teal">
    <div className="container">
      <div className="footer row">
        <div className="col l6 s12">
          <h5 className="white-text">Mapple Clothing</h5>
          <p className="grey-text text-lighten-4">
            Best Clothing in the world at your doorstep.
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul className="row">
            <li className="col">
              {/* eslint-disable-next-line */}
              <a className="grey-text text-lighten-3" href="#">
                <i className="material-icons">facebook</i>
              </a>
            </li>
            <li className="col">
              {/* eslint-disable-next-line */}
              <a className="grey-text text-lighten-3" href="#">
                <i className="material-icons">email</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2020 Mapple Clothing
        <a
          className="grey-text text-lighten-4 right"
          href="https://github.com/rizwan2000rm"
        >
          Made by Rizwan Memon
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
