import React from "react";
import axios from "axios";
import '../task.min.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.fName = React.createRef();
    this.lName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.phone = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "http://localhost:3001/users/";
    axios.get(url).then(response => this.setState({ users: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:3001/users/signup/";
    axios.post(url, { fName: this.fName.current.value,
                      lName: this.lName.current.value,
                      email: this.email.current.value,
                      password: this.password.current.value,
                      phone: this.phone.current.value
    }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.fName.current.value = "";
      this.lName.current.value = "";
      this.email.current.value = "";
      this.password.current.value = "";
      this.phone.current.value = "";
    });
  };

  /*

  updateTask = (id) => {
    let url = "http://localhost:3001/signup/" + id + "/complete";
    axios.put(url, { taskid: this.id, isComplete: this.isComplete }).then(response => {
      this.getData();
    });
  };
  
  deleteUser = (id) => {
    let url = `http://localhost:3001/users/${id}/delete`;
    axios.delete(url, { id: this.id}).then(response => {
      console.log(response)
    });
    
  };
*/
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
        <ul>
          {this.state.users.map(p => (
            <li key={p.userId}>
              {p.fName} : { p.lName} : {p.email} # {p.phone}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
