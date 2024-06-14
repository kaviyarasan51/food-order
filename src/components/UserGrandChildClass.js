import React from "react";

class UserGrandChildClass extends React.Component {
  constructor(props) {
    super();
    console.log(props.name + " child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child - component did mount");
  }

  render() {
    console.log(this.props.name + " child render");
    return <div>Child component</div>;
  }
}

export default UserGrandChildClass;
