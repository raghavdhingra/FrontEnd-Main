import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "";
import Routes from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
