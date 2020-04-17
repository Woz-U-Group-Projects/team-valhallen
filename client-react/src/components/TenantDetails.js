import React from "react";
import axios from "axios";
import '../task.min.css';
import Table from 'react-bootstrap/Table';
import TenantDetail from "./TenantDetail";


class TenantDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: [],
            viewSelected: false,
            selectedUser: '',
        };
    }

    componentDidMount() {
        this.getTenant();
    }

    getTenant = () => {
        let url = "http://localhost:3001/users/tenantProfile/";
        axios.get(url, { userId: userId }).then(response => this.setState({ user: response.data, viewSelected: true, selectedUser: userId }));
    };

    viewTenant = (id) => {
        this.setState({ viewSelected: true, selectedUser: id });
        let url = "http://localhost:3001/users/" + id;
        axios.get(url, { userid: id }).then(response => {
          this.setState({ user: response.data })
        });
      };


    render() {
        const viewSelected = this.state.viewSelected;
        let viewComp;

        if (viewSelected) {
            viewComp = <TenantDetail
                userId={this.state.selectedUser}
                tenantDetails={this.state.user}
                details={this.props.details}
            />;
        }
        return (
            <div>
                <h1>Tenant Profile</h1>
                {viewComp}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Unit #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.map(p => (
                            <tr key={p.userId}>
                                <td>{p.fName} {p.lName}</td>
                                <td>{p.email}</td>
                                <td>{p.phone}</td>
                                <td><button onClick={() => this.viewTenant(p.userId)}>View User</button></td>
                            </tr>
                        ))}

                        {/* <tr >
                            <td></td>
                            <td><div>{props.userDetails.fName} </div></td>
                            <td>{props.userDetails.lName}</td>
                            <td>{props.userDetails.email}</td>
                            <td>{props.userDetails.phone}</td>
                            <td><button>Edit Details</button></td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default TenantDetails;