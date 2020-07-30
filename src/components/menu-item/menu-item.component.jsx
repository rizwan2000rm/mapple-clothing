import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./menu-item.styles.scss";
import { useEffect } from "react";

const MenuItem = ({
  title,
  imageUrl,
  description,
  size,
  history,
  match,
  linkUrl
}) => {
  useEffect(() => {
    const M = window.M;

    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".materialboxed");
      // eslint-disable-next-line
      const instances = M.Materialbox.init(elems, {});
    });
  });

  return (
    <div className="col s12 l6">
      <div className="card hoverable">
        <div className="card-image">
          <img
            className="materialboxed"
            width="300"
            alt={title}
            src={imageUrl}
          />
          <span className="card-title">{title.toUpperCase()}</span>
        </div>
        <div className="card-content">
          <Link to={linkUrl} className="card-title teal-text">
            {title.toUpperCase()}
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
