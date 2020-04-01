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
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/users/";
    axios.get(url).then(response => this.setState({ users: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:3001/users";
    axios.post(url, { fName: this.fName.current.value,
                      sName: this.sName.current.value,
                      email: this.email.current.value,
                      password: this.password.current.value,
                      phone: this.phone.current.value
    }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.fName.current.value = "";
      this.sName.current.value = "";
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
        <h3> Second Name</h3>
        <input ref={this.sName} />
        <h3>Email</h3>
        <input ref={this.email} />
        <h3>Password</h3>
        <input ref={this.password} />
        <h3>Phone</h3>
        <input ref={this.phone} />
        <button type="button" className="btn btn-primary" onClick={this.addUser}>add User</button>
        <ul>
          {this.state.users.map(p => (
            <li key={p.id}>
              {p.fName} : { p.sName} : {p.email} # {p.phone}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
