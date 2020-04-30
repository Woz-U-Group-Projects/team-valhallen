// Necessary Imports
import React from "react";
import axios from "axios";

// Styling Imports
import { Form, Col, Container } from 'react-bootstrap';
import '../Styling.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.fName = React.createRef();
    this.lName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.phone = React.createRef();
    this.userType = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/users/signup";
    axios.get(url).then(response => this.setState({ users: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:3001/users/signup";
    axios.post(url, {
      fName: this.fName.current.value,
      lName: this.lName.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      phone: this.phone.current.value
      //userType: this.userType.current.value
    })
    // .then(response => {
    //   // refresh the data
    //   this.getData();
    //   // empty the input
    //   this.fName.current.value = "";
    //   this.lName.current.value = "";
    //   this.email.current.value = "";
    //   this.password.current.value = "";
    //   this.phone.current.value = "";
    //   this.userType.current.value ="";
    // })
    .then(res => {
      if(res) {
          this.props.history.push('/')
      }
  });
  };

  // JSX Rendering
  render() {
    return (
      <div>
        <h3>First Name</h3>
        <input ref={this.fName} />
        <h3> Last Name</h3>
        <input ref={this.lName} />
        <h3>Email</h3>
        <input ref={this.email} />
        <h3>Password</h3>
        <input ref={this.password} />
        <h3>Phone</h3>
        <input ref={this.phone} />
        {/* <h3>UserType</h3>
        <select ref={this.userType}>
          <option value="propertyManager" >Property Manager</option>
          <option value="technician">Technician</option>
          <option value="tenant">Tenant</option>
        </select> */}
        <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button>
      </div>
    );
  }
}

export default Signup;

// Original UserSignUp from Dev

//    \/ \/ \/ \/ \/ \/

// import React from "react";
// import axios from "axios";
// import '../task.min.css';

// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { users: [] };
//     this.fName = React.createRef();
//     this.lName = React.createRef();
//     this.email = React.createRef();
//     this.password = React.createRef();
//     this.phone = React.createRef();
//     this.userType = React.createRef();
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {

//     // Express uses port 3001 (react uses 3000)
//     let url = "http://localhost:3001/users/";
//     axios.get(url).then(response => this.setState({ users: response.data }));
//   };

//   addUser = () => {
//     let url = "http://localhost:3001/users/signup";
//     axios.post(url, {
//       fName: this.fName.current.value,
//       lName: this.lName.current.value,
//       email: this.email.current.value,
//       password: this.password.current.value,
//       phone: this.phone.current.value,
//       userType: this.userType.current.value
//     }).then(response => {
//       // refresh the data
//       this.getData();
//       // empty the input
//       this.fName.current.value = "";
//       this.lName.current.value = "";
//       this.email.current.value = "";
//       this.password.current.value = "";
//       this.phone.current.value = "";
//       this.userType.current.value ="";
//     });
//   };


//   render() {
//     return (
//       <div>
//         <h3>First Name</h3>
//         <input ref={this.fName} />
//         <h3> Second Name</h3>
//         <input ref={this.lName} />
//         <h3>Email</h3>
//         <input ref={this.email} />
//         <h3>Password</h3>
//         <input ref={this.password} />
//         <h3>Phone</h3>
//         <input ref={this.phone} />
//         <h3>UserType</h3>
//         <select ref={this.userType}>
//           <option value="Property Manager" >Property Manager</option>
//           <option value="Technician">Technician</option>
//           <option value="Tenant">Tenant</option>
//         </select>
//         <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button>
//       </div>
//     );
//   }
// }

// export default User;

