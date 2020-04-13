import React from "react";
import axios from "axios";
import '../task.min.css'

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [], viewId: 2, email: ''};                 
  }

  /***********Need to Recieve User Id from store********************/
  /***********Render below in the didMount**************************/

  componentDidMount() {
    this.getData(this.state.viewId);
  }

  getData = (id) => {
    let url = "http://localhost:3001/users/" + id;
    axios.get(url, { userid: this.id }).then(response => {
      this.setState({ user: response.data })
    });     
  };

  updateUser = (id) => {                                     
    let url = "http://localhost:3001/users/" + id;     
    axios.put(url, { 
      userid: this.id, 
      isComplete: this.isComplete 
    }).then(response => {   
      this.getData();
    });
  };

/*
  archiveUser = (id) => {                                     
    let url = "http://localhost:3001/users/" + id + "/complete";     
    axios.put(url, { userid: this.id, isComplete: this.isComplete }).then(response => {   
      this.getData();
    });
  };
*/

  render() {
    //const userData = ({ user, onUpdateUser, onUserEmailChanged, onUserPassChanged, onUserPhoneChanged, onUserUnitChanged, updateEmailText, updatePassText, updatePhoneText, updateUnitText }) => {}

    //let email = this.state.user.email;
    //let password = this.state.user.password;
    //let phone = this.state.user.phone;
    //let unitId = this.state.user.unitId;


    return (
      <div>
        <h3>User Detail</h3>
          <div>
            <div>{this.state.user.fName} {this.state.user.lName}</div>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={this.props.user.email} onChange={event => this.props.onUserEmailChanged(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={this.props.updatePassText} onChange={event => this.props.onUserPassChanged(event.target.value)}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={this.props.updatePhoneText} onChange={event => this.props.onUserPhoneChanged(event.target.value)}/>
            <label htmlFor="unitId">Unit ID</label>
            <input type="text" name="unitId" value={this.props.updateUnitText} onChange={event => this.props.onUserUnitChanged(event.target.value)}/>
          </form>
          <div>
            <button type="button" className="btn btn-secondary">Edit User</button>
            <button type="button" className="btn btn-primary" onClick={this.props.onUpdateUser}>Save User</button>
            <button type="button" className="btn btn-secondary">Archive User</button>
          </div>    
      </div>
    );
  }
}

export default UserDetail;