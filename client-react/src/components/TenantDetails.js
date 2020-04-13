import React from "react";
import axios from "axios";
import '../task.min.css';
import Table from 'react-bootstrap/Table';


class TenantDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: {},
        };
    }

    componentDidMount() {
        this.getTenant();
    }

    // getTenant = () => {
    //     let url = "http://localhost:3001/users/";
    //     axios.get(url).then(response => this.setState({ users: response.data }));
    // };

    getTenant = () => {
        let url = "http://localhost:3001/users/profile/";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };

    showUser = () => {
        let url = "http://localhost:3001/users/profile/";
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
                            <th>Unit #</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td></td>
                            <td>{this.state.user.fName}</td>
                            <td>{this.state.user.lName}</td>
                            <td>{this.state.user.email}</td>
                            <td>{this.state.user.phone}</td>
                            <td>{this.state.user.unitId}</td>
                            <td><button>Edit Details</button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default TenantDetails;