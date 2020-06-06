import React from "react";
// ! REACT DOM takes care of best way to update DOM when react states are changes
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

// * RENDERING OUR MAIN APP COMPONENT IN INDEX.HTML PAGE
// ! ALL OUR CODE IS WITHIN THIS MAIN APP COMPONENT
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
