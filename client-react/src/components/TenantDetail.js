import React from "react";
import '../task.min.css'

const TenantDetail = (props) => {

    return (
      <div>
        <h3>Tenant Details</h3>
          <div>
            <div>{props.tenantDetails.fName} {props.tenantDetails.lName}</div>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={props.tenantDetails.email} onChange={event => props.onUpdateEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={props.tenantDetails.password} onChange={event => props.onUpdatePassword(event.target.value)}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={props.tenantDetails.phone} onChange={event => props.onUpdatePhone(event.target.value)}/>
            <label htmlFor="type">User Type</label>
            <input type="text" name="type" value={props.tenantDetails.userType} onChange={event => props.onUpdateUserType(event.target.value)}/>
          </form>
          <div>
            <button type="button" className="btn btn-secondary">Edit User</button>
          </div>    
      </div>
    );
}

export default TenantDetail;