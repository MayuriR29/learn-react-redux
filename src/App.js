import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/usersActions";

class App extends Component {
  onUpdateUser = event => {
    this.props.onUpdateUser(event.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input onChange={this.onUpdateUser} />
        {this.props.users}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    products: state.product,
    users: state.user,
    userPlusProp: `${state.user} ${props.randomProps}`
  };
};

const mapActiosToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapActiosToProps
)(App);
