import React from "react";
import '../task.min.css'

const TenantDetail = (props) => {

    return (
      <div>
        <h3>Tenant Details</h3>
          <div>
            <div>{this.props.fName} </div>
            <div>{this.props.lName}</div>
            <div>{this.props.email}</div>
            <div>{this.props.phone}</div>
          </div>   
      </div>
    );
//  }
}

export default TenantDetail;