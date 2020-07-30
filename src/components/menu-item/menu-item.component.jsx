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
      <div className="card medium">
        <div className="card-image">
          <img class="materialboxed" width="300" alt={title} src={imageUrl} />
        </div>
        <div className="card-content">
          <span className="card-title">{title.toUpperCase()}</span>
          <p>{description}</p>
        </div>
        <div className="card-action ">
          <Link className="teal-text" to={linkUrl}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
