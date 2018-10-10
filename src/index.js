import React from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import {Provider} from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./routes";

// Styles
import "bootstrap/dist/css/bootstrap";
import "./common";

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Router/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </React.Fragment>
  </Provider>,
  document.getElementById("app")
);
