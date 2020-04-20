import React from "react";
import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';



class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: [],
            email: '',
            password: '',
            userType: ''
        };
        this.userStatus = this.userStatus.bind(this);
        this.email = React.createRef();
        this.password = React.createRef();
        this.userType = React.createRef();
    }
    componentDidMount() {
        this.getData();
    }

    userStatus(event) {
        this.setState({ userType: event.target.value });
    }

    getData = () => {
        let url = "http://localhost:3001/users/";
        axios.get(url).then(response => this.setState({ user: response.data }));
    };
    
    login = () => {
        let url = "http://localhost:3001/users/login/";
        axios.post(url, {
            email: this.email.current.value,
            userType: this.userType.current.value,
            password: this.password.current.value
            
        }).then(res => {
            if (res) {
                localStorage.setItem('usertoken', res.data);
                this.props.history.push('/tenantDetails'); 
                return res.data;   
            }
        // })
        // .then(res => {
        //     if (res.data) {
        //         this.props.history.push('/tenantDetails');  
        //     }
            // if (res.data.userType === 'Technician') {
            //     this.props.history.push('/techProfile');  
            // }
            // if (res.data.userType === 'Property Manager') {
            //     this.props.history.push('/mgrProfile');  
            // }
        }).catch(err => {
            console.log(err)
        })
    };

    signup = () => {
        let url = "http://localhost:3001/login/";
        axios.get(url).then(response => this.setState({ users: response.data }));
    };


    render() {
        return (
            <div>
                <h3>Login</h3>
                <label>Email:</label><input ref={this.email} />
                <label>Password:</label><input ref={this.password} />
                <select  onChange={this.userStatus} ref={this.userType}>
                    <option value="tenant">Tenant</option>
                    <option value="manager">Manager</option>
                    <option value="technician">Technician</option>
                </select>
                <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>
            </div>

        );
    }
}

export default Login;
