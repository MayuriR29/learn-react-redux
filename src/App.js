import React, { Component } from "react";
import "./App.css";
import Display from "./Display/Display";
import ReduxDemo from "./ReduxDemo/ReduxDemo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["A", "C", "B", "D"],
      inputValue: ""
    };
  }
  render() {
    return (
      <div className="App">
        <Display displayName={this.state.names} />
        <ReduxDemo />
        <button>Add more names</button>
        <input />
      </div>
    );
  }
}

export default App;
