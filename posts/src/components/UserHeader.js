import React, { Component } from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    if(!this.props.user) {
        return null;
    }
    return <div className="header">
        <h1>{this.props.user.name}</h1>
    </div>;
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)  //[users]
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
