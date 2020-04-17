import React from "react";
import axios from "axios";
import '../task.min.css';
import Table from 'react-bootstrap/Table';


class TenantDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = { user: {} };
    }

    componentDidMount() {
        this.getTenant();
    }

    getTenant = () => {
        let url = "http://localhost:3001/users/tenantProfile/";
        axios.get(url).then(response => this.setState({ user: response.data }));
    };


    render() {
        return (
            <div>
                <h1>Tenant Profile</h1>
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
                            <td>{this.state.user.fName}</td>
                            <td>{this.state.lName}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.phone}</td>
                            <td><button>Edit Details</button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default TenantDetails;