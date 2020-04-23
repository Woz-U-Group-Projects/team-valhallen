import React from "react";
import axios from "axios";
import TenantDetailEdit from "./TenantDetailEdit";
import TenantDetailRetrieve from "./TenantDetailRetrieve";
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateEmail, updatePhone } from '../actions/tenantActions';
import '../task.min.css'
import CreateTicketModal from "./CreateTicketModal";
import Card from 'react-bootstrap/Card';

class TenantDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],                    // used to store array of users 
      user: {},                     // used to pass user details
      viewConfirm: false,
      newTrigger: false,
      viewUserId: ''                   // used to pass user details
    };
    this.getTenants = this.getTenants.bind(this)
    this.viewUser = this.viewUser.bind(this)
  }

  componentDidMount() {
    this.getTenants();
    this.viewUser();
  }

  getTenants() {
    let url = "http://localhost:3001/users/tenants";
    axios.get(url).then(response => this.setState({ users: response.data }));
    this.setState({ viewConfirm: false, newTrigger: false });
  };


  viewUser(id) {
    this.setState({ viewConfirm: true });
    let url = "http://localhost:3001/users/" + 1;
    axios.get(url, { userid: id }).then(response => {
      this.setState({ user: response.data })
    });
    this.setState({ viewUserId: id });
    console.log("View User #" + id);
  };

  updateUser(evt) {
    let url = "http://localhost:3001/users/" + evt.target.dataset.id;
    axios.put(url, {
      newFirstName: evt.target.dataset.fname,
      newLastName: evt.target.dataset.lname,
      newEmail: evt.target.dataset.email,
      newPhone: evt.target.dataset.phone
    }).then(alert("User Details Have Beed Saved"))
    console.log(evt.target.dataset.email);
    
    console.log(evt.target.dataset.phone);
  };

  render() {
    const viewSelected = this.state.viewConfirm;    //stores if view user is selected
    const newTrigger = this.state.newTrigger;       //confirms user detail component render
    let viewComp, assignComp;

    if (viewSelected & newTrigger === false) {                          // renders userDetail if true
      assignComp = <TenantDetailRetrieve tenantDetail={this.state.user} />
      viewComp = <TenantDetailEdit
        tenantDetail={this.state.user}
      />;
    }
    if (viewSelected & newTrigger) {
      //viewComp = <NewUserConfirm 
      //  userDetail={this.state.user}
      //  updateCcall={this.updateUser}
      //  deleteCall={this.deleteUser} 
      ///>;
      console.log("Render New User Confirm")
    }

    return (
      <div>

        {/* <h3>List of Users</h3> */}

        {/* <table>
          <tbody>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>


            <tr>
              <td>{this.state.user.fName} {this.state.user.lName}</td>
              <td>{this.state.user.email}</td>
              <td>{this.state.user.phone}</td>
              <td><button onClick={this.viewButton} >Edit Info</button></td>

            </tr>


          </tbody>
        </table> */}

        
        {assignComp}
        {viewComp}
        <Card style={{ width: '18rem' }}>
          <CreateTicketModal />
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateFirstName: text => dispatch(updateFirstName(text)),
    onUpdateLastName: text => dispatch(updateLastName(text)),
    onUpdateEmail: text => dispatch(updateEmail(text)),
    onUpdatePhone: text => dispatch(updatePhone(text))
  };
}
function mapStateToProps(state) {
  return {
    details: state.details,
    updateFirstName: state.updateFirstName,
    updateLastName: state.updateLastName,
    updateEmail: state.updateEmail,
    updatePhone: state.updatePhone
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