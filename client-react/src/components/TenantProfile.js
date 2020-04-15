import React from "react";
import jwt_decode from 'jwt-decode';
import CreateTicket from "./CreateTicket";



class TenantProfile extends React.Component {
    constructor () {
        super();
        this.state = {
            fName: '',
            lName: '',
            phone: '',
            email: ''
        };
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token)
        this.setState({
            fName: decoded.fName,
            lName: decoded.lName,
            phone: decoded.phone,
            email: decoded.email
        })
    }



    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Tenant Profile</h1>
                        <table>
                            <thead>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Phone</td>
                                <td>Email</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.fName}</td>
                                </tr>
                                <tr>
                                    <td>{this.state.lName}</td>
                                </tr>
                                <tr>
                                    <td>{this.state.phone}</td>
                                </tr>
                                <tr>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <CreateTicket />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default TenantProfile;