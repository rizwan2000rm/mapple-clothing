import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import M from "materialize-css/dist/js/materialize.min.js";
import "./directory.styles.scss";

class Directory extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".materialboxed");
      // eslint-disable-next-line
      M.Materialbox.init(elems, {});
      // console.log("Menu");
    });
    // console.log("Menu UseEffect");
  }

  render() {
    return (
      <div className="directory">
        <div className="header teal-text">
          <h4>SHOP NOW</h4>
          <hr />
        </div>
        <div className="row">
          {this.props.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
