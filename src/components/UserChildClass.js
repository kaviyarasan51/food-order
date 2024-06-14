import React from "react";

import UserGrandChildClass from "./UserGrandChildClass";

class UserChildClass extends React.Component {
  constructor(props) {
    super();
    console.log(props.name + " child constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " Child - component did mount");
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child - component did update");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Child - component will unmount");
  }

  render() {
    console.log(this.props.name + " child render");
    return (
      <div>
        <div>Child component</div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Increment
        </button>
      </div>
    );
  }
}

export default UserChildClass;
