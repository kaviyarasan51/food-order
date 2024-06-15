import React from "react";

import { GIT_USER_DETAILS } from "../../utils/constants";

import UserChildClass from "./UserChildClass";
/**
 * Class based components
 * Mounting phase
 *  constructor
 *  render
 *  componentDidMount
 * Commit / Update phase
 *  re render
 *  ComponentDidUpdate
 * Unmount phase
 *  ComponentWillUnmount
 *
 *
 * Functional components
 * [status, setStatus] = useState('');
 * useEffect(() => {
 *  // To do some operation
 * }, [status])
 * useEffect(() => {
 * // To do some operation
 * }, [loginMode])
 *
 * this.state = {
 *  status: '',
 *  loginMode: '',
 * }
 */
class UserClass extends React.Component {
  constructor(props) {
    // console.log("Parent Constructor called");
    super();

    this.state = {
      buttonName: "Register",
      registered: false,
      count: 0,
      count1: 0,
      login: "Sample",
      avatar_url: "",
      repos_url: "",
    };
  }

  timer = null;
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
    // console.log("Parent render called");
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
            <p>Count - {this.state.count}</p>
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

          <div className='btn-cont'>
            <button
              className='btn-1'
              onClick={() => {
                this.setState({
                  count1: this.state.count1 - 1,
                });
              }}>
              -
            </button>
            <p>Count1 - {this.state.count1}</p>
            <button
              className='btn-1'
              onClick={() => {
                this.setState({
                  count1: this.state.count1 + 1,
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
    // console.log("Parent Component mount called");
    this.fetchGITRepoList();

    this.timer = setInterval(() => {
      console.log("set interval called for class based component");
    }, 1000);
  }

  componentDidUpdate(prevProp, prevState) {
    // console.log("Parent - component did update");
    console.log(prevProp, prevState);

    if (prevState.count !== this.state.count) {
      console.log("Count updated");
    }

    if (prevState.count1 !== this.state.count1) {
      console.log("Count1 updated");
    }
  }

  componentWillUnmount() {
    // console.log("Parent  - component will unmount");
    clearInterval(this.timer);
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
