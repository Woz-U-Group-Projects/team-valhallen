import React from "react";
import axios from "axios";
import '../task.min.css';
import Table from 'react-bootstrap/Table';
import TenantDetail from "./TenantDetail";


class TenantDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: [],
            viewSelected: false,
            selectedUser: '',
        };
    }

    componentDidMount() {
        this.getTenant();
        this.viewTenant();
    }

    getTenant = () => {
        let url = "http://localhost:3001/users/tenantProfile/";
        axios.get(url).then(response => this.setState({ user: response.data, viewSelected: true, selectedUser: this.state.user.userId }));
    };

    viewTenant = (userId) => {
        
        
        this.setState({ viewSelected: true, selectedUser: userId });
        let url = "http://localhost:3001/users/tenantProfile/";
        axios.get(url, { userid: userId }).then(response => {
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
                        <tr >
                            <td></td>
                            <td key={this.viewTenant}>{this.state.user.fName}</td>
                            <td>{this.state.user.lName}</td>
                            <td>{this.state.user.email}</td>
                            <td>{this.state.user.phone}</td>
                            <td><button>Edit Details</button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default TenantDetails;