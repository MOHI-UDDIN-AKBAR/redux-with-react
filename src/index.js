import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import style from "./style.css";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
