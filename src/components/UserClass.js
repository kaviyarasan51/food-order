import React from "react";

import { GIT_USER_DETAILS } from "../../utils/constants";

import UserChildClass from "./UserChildClass";
class UserClass extends React.Component {
  constructor(props) {
    console.log("Parent Constructor called");
    super();

    this.state = {
      buttonName: "Register",
      registered: false,
      count: 0,
      login: "Sample",
      avatar_url: "",
      repos_url: "",
    };
  }

  fetchGITRepoList = async () => {
    const data = await fetch(GIT_USER_DETAILS);
    const gitResponse = await data.json();
    // setUserDetails(gitResponse);
    this.setState({
      login: gitResponse.login,
      avatar_url: gitResponse.avatar_url,
      repos_url: gitResponse.repos_url,
    });
  };

  render() {
    console.log("Parent render called");
    return (
      <div>
        <div className='rest-menu-list-cont git-menu-list-cont'>
          <h2>{this.props.name}</h2>
          <h4>{this.props.email}</h4>
          <h4>{this.props.id}</h4>
          <p>
            {!this.state.registered
              ? "Please Register"
              : "Registration successful"}
          </p>
          <button
            onClick={() => {
              if (this.state.registered) {
                this.setState({
                  buttonName: "Register",
                  registered: false,
                });
              } else {
                this.setState({
                  buttonName: "UnRegister",
                  registered: true,
                });
              }
            }}>
            {this.state.buttonName}
          </button>
          <div className='details-cont'>
            <div>
              <h1>Git details in class based component</h1>
              <h3>{`Name - ${this.state.login}`}</h3>
              <h4>{`Git URL - ${this.state.repos_url}`}</h4>
            </div>
            <img src={this.state.avatar_url} width='100' height='100' />
          </div>
          <div className='btn-cont'>
            <button
              className='btn-1'
              onClick={() => {
                this.setState({
                  count: this.state.count - 1,
                });
              }}>
              -
            </button>
            <p>{this.state.count}</p>
            <button
              className='btn-1'
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}>
              +
            </button>
          </div>
        </div>
        <UserChildClass name='child'></UserChildClass>
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent Component mount called");
    this.fetchGITRepoList();
  }

  componentDidUpdate() {
    console.log("Parent - component did update");
  }

  componentWillUnmount() {
    console.log("Parent  - component will unmount");
  }
}

export default UserClass;

// class LocationDetails {
//   city;
//   constructor(city1) {
//     this.city = city1;
//   }
//   printLocation() {
//     console.log(this.city);
//   }
// }

// class EmployeeDetails extends LocationDetails {
//   name;
//   id;
//   city;
//   constructor(name1, id1, city1) {
//     super(city1);
//     this.name = name1;
//     this.id = id1;
//     this.city = city1;
//   }

//   printName() {
//     console.log(this.name + this.id);
//   }
// }

// let nameObj = new EmployeeDetails("Ganapathy", 12, "Chennai");
// nameObj.printName();

// let nameObj1 = new EmployeeDetails("tester", 45, "Coimbatore");
// nameObj1.printName();

// let inheritedObj = new EmployeeDetails("Developer", 45, "Madurai");
// inheritedObj.printLocation();
