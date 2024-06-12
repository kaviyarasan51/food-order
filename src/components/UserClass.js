import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super();
    console.log(props.name);
    console.log(props.email);
    console.log(props.id);

    this.state = {
      buttonName: "Register",
      registered: false,
    };
  }

  render() {
    return (
      <div className='rest-menu-list-cont'>
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
      </div>
    );
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
