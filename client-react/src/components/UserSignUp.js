// Necessary Imports
import React from "react";
import axios from "axios";

// Styling Imports
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
    })
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
        
        <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button>
      </div>
    );
  }
}

export default Signup;

