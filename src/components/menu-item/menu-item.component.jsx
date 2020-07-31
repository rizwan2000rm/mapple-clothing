import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({
  title,
  imageUrl,
  description,
  size,
  history,
  match,
  linkUrl
}) => (
  <div className="col s12 l6">
    <div className="card">
      <div className="card-image">
        <img className="materialboxed" width="300" alt={title} src={imageUrl} />
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
export default withRouter(MenuItem);
