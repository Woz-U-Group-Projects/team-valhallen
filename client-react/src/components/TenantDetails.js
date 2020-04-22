import React from "react";
import axios from "axios";
import TenantDetail from "./TenantDetail";
import { connect } from 'react-redux';
import { details, updateEmail, updatePassword, updatePhone, updateUserType, updateUnit } from '../actions/actions';
import '../task.min.css'

class TenantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],                    // used to store array of users
      viewSelected: false,          // used to determine if user view is selected
      selectedUser: '',             // used to pass selected userId to child component 
      user: {}                     // used to pass user details
    };   
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    let url = "http://localhost:3001/users/";     
    axios.get(url).then(response => this.setState({ users: response.data })); 
    this.setState({ viewSelected: false });
  };

  viewUser = (id) => {
    this.setState({ viewSelected: true, selectedUser: id });      // viewSelected for rendering user detail component
    let url = "http://localhost:3001/users/" + id;
    axios.get(url, { userid: id }).then(response => {
      this.setState({ user: response.data })
    });
  };

  render() {
    const viewSelected = this.state.viewSelected;    //stores if view user is selected
    let viewComp; 

    if (viewSelected){                          // renders userDetail if true
      viewComp = <TenantDetail
        userId={this.state.selectedUser}
        tenantDetails={this.state.user} 
        details={this.props.details} 
        onUpdateEmail={this.props.onUpdateEmail}
        onUpdatePassword={this.props.onUpdatePassword}
        onUpdatePhone={this.props.onUpdatePhone}
        onUpdateUserType={this.props.onUpdateUserType}
        onUpdateUnit={this.props.onUpdateUnit}
        />;
    }

    return (
      <div>
        
        <h3>List of Users</h3>
        <table>
          <tbody>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>

            {this.state.users.map(p => (
              <tr key={p.userId}>
                <td>{p.fName} {p.lName}</td> 
                <td>{p.email}</td> 
                <td>{p.phone}</td> 
                <td><button onClick={() => this.viewUser(p.userId)}>View User</button></td>
              </tr>
            ))}

          </tbody>
        </table>

        <div className="detail-container">
          { viewComp }
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateEmail: text => dispatch(updateEmail(text)),
    onUpdatePassword: text => dispatch(updatePassword(text)),
    onUpdatePhone: text => dispatch(updatePhone(text)),
    onUpdateUserType: text => dispatch(updateUserType(text)),
    onUpdateUnit: text => dispatch(updateUnit(text))
  };
}
function mapStateToProps(state) {
  return{
    details: state.details,
    updateEmail: state.updateEmail,
    updatePassword: state.updatePassword,
    updatePhone: state.updatePhone,
    updateUserType: state.updateUserType,
    updateUnit: state.updateUnit
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantDetails);


// import React from "react";
// import axios from "axios";
// import '../task.min.css';
// import Table from 'react-bootstrap/Table';
// import UserDetail from "./UserDetail";
// import { connect } from 'react-redux';
// import { details } from '../actions/actions';


// class TenantDetails extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             users: [],
//             viewSelected: false,
//             selectedUser: '',

//         };
//     }

//     componentDidMount() {
//         this.getTenant();
//     }

//     getTenant = () => {
//         let url = "http://localhost:3001/users/1";
//         axios.get(url).then(response => this.setState({ users: response.data }));
//     };


//     render() {
//         const viewSelected = this.state.viewSelected;    //stores if view user is selected
//         let viewComp; 
    
//         if (viewSelected){                          // renders userDetail if true
//           viewComp = <UserDetail
//             userId={this.state.selectedUser}
//             userDetails={this.state.user} 
//             details={this.props.details}
//             />;
//         }
//         return (
//             <div>
//                 <h1>Tenant Profile</h1>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Unit #</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     { viewComp }
//                         {/* {this.state.users.map(p => (
//                             <tr key={p.userId}>
//                                 <td>{p.fName} {p.lName}</td>
//                                 <td>{p.email}</td>
//                                 <td>{p.phone}</td>
//                                 <td><button onClick={() => this.viewUser(p.userId)}>View User</button></td>
//                             </tr>
//                         ))} */}
//                         {/* <tr>
//                             <td></td>
//                             <td>{this.state.user.fName}</td>
//                             <td>{this.state.user.lName}</td>
//                             <td>{this.state.user.email}</td>
//                             <td>{this.state.user.phone}</td>
//                             <td><button>Edit Details</button></td>
//                         </tr> */}
//                     </tbody>
//                 </Table>
//             </div>
//         );
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
      
      
//     };
//   }

// function mapStateToProps(state) {
//     return{
//       details: state.details
//     };
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(TenantDetails);