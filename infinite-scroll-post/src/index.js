import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter as Router } from "react-router-dom";
import StoreProvider from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
