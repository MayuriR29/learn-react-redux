import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";

const productReducer = (state = [], action) => {
  return state;
};

const usersReducer = (state = "", action) => {
  return state;
};

const allReducers = combineReducers({
  product: productReducer,
  user: usersReducer
});
const store = createStore(
  allReducers,
  {
    product: [{ name: "iphone" }], //setting the initial state
    user: "Michael"
  },
  window.devToolsExtension && window.devToolsExtension()
);

// console.log(store.getState());

// const action = {
//   type: "changeState",
//   payload: {
//     newState: "New State"
//   }
// };

// store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
