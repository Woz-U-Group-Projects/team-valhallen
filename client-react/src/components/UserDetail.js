import React from "react";
import axios from "axios";
import '../task.min.css'

const UserDetail = (props, { details, onDefineUserDetail, onUpdateUserDetail, onUpdateEmail, onUpdatePassword, onUpdatePhone, onUpdateUserType, onUpdateUnit, updateEmail, updatePassword, updatePhone, updateUserType, updateUnit }) => {

  function updateUser(id) {                                     
    //let url = "http://localhost:3001/users/" + id;     
    //axios.put(url, { 
    //  userid: id    
    //}).then()
    console.log("updateUser Called");
  };

  /*
  archiveUser = (id) => {                                     
    let url = "http://localhost:3001/users/" + id + "/complete";     
    axios.put(url, { userid: this.id, isComplete: this.isComplete }).then(response => {   
      this.getData();
    });
  };
  */

    return (
      <div>
        <h3>User Detail</h3>
          <div>
            <div>{props.userDetails.fName} {props.userDetails.lName}</div>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={updateEmail} onChange={event => props.onUpdateEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={updatePassword} onChange={event => props.onUpdatePassword(event.target.value)}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={updatePhone} onChange={event => props.onUpdatePhone(event.target.value)}/>
            <label htmlFor="type">User Type</label>
            <input type="text" name="type" value={updateUserType} onChange={event => props.onUpdateUserType(event.target.value)}/>
          </form>
          <div>
            <button type="button" className="btn btn-primary" onClick={updateUser()}>Save User</button>
            <button type="button" className="btn btn-danger">Archive User</button>
          </div>    
      </div>
    );
}

export default UserDetail;