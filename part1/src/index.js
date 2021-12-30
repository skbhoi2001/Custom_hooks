import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./Component/Button/AppProvider";
import App from "./App";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  rootElement
);
