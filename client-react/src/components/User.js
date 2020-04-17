<<<<<<< HEAD
import React from "react";
import axios from "axios";
import '../task.min.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.fName = React.createRef();
    this.sName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.phone = React.createRef();
    this.unitId = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/users/";
    axios.get(url).then(response => this.setState({ users: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:3001/users";
    axios.post(url, {
      fName: this.fName.current.value,
      sName: this.sName.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      phone: this.phone.current.value,
      unitId: this.unitId.current.value
    }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.fName.current.value = "";
      this.sName.current.value = "";
      this.email.current.value = "";
      this.password.current.value = "";
      this.phone.current.value = "";
      this.unitId.current.value ="";
    });
  };


  render() {
    return (
      <div>
        <h3>First Name</h3>
        <input ref={this.fName} />
        <h3> Second Name</h3>
        <input ref={this.sName} />
        <h3>Email</h3>
        <input ref={this.email} />
        <h3>Password</h3>
        <input ref={this.password} />
        <h3>Phone</h3>
        <input ref={this.phone} />
        <h3>Unit #</h3>
        <select ref={this.unitId}>
          <option value="1" >Unit #1</option>
          <option value="2">Unit #2</option>
          <option value="3">Unit #3</option>
          <option value="4">Unit #4</option>
          <option value="5">Unit #5</option>
          <option value="6">Unit #6</option>
          <option value="7">Unit #7</option>
          <option value="8">Unit #8</option>
          <option value="9">Unit #9</option>
          <option value="10">Unit #10</option>
          <option value="11">Unit #11</option>
          <option value="12">Unit #12</option>
          <option value="13">Unit #13</option>
          <option value="14">Unit #14</option>
          <option value="15">Unit #15</option>
          <option value="16">Unit #16</option>
          <option value="17">Unit #17</option>
          <option value="18">Unit #18</option>
          <option value="19">Unit #19</option>
          <option value="20">Unit #20</option>
        </select>
        <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button>
        {/* <ul>
          {this.state.users.map(p => (
            <li key={p.id}>
              {p.fName} : { p.sName} : {p.email} # {p.phone}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default User;
=======
>>>>>>> dev
