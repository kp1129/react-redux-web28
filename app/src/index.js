import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { exchangeReducer } from "./reducers/exchangeReducer";
import thunk from "redux-thunk";
// import components
import App from "./App";
// import css
import "./index.css";

// create Redux store
const store = createStore(exchangeReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
