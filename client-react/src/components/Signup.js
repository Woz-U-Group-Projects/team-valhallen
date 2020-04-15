import React from "react";
import { signup } from "./UserFunctions";
// import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';



class Signup extends React.Component {
    constructor () {
        super();
        this.state = {
            fName: '',
            lName: '',
            phone: '',
            email: '',
            password: ''    
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   onChange(e) {
       this.setState({[e.target.name]: e.target.value})
   } 

   onSubmit(e) {
       e.preventDefault()
       const user = {
           fName: this.state.fName,
           lName: this.state.lName,
           phone: this.state.phone,
           email: this.state.email,
           password: this.state.password
       }

       signup(user).then(res => {
           if(res) {
               this.props.history.push('/login')
           }
       })
   }

    

    render() {
        return (
            <div className="container">
               <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="fName">First Name</label>
                            <input  className="form-control" name="fName" placeholder="Enter First Name" value={this.state.fName} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lName">First Name</label>
                            <input  className="form-control" name="lName" placeholder="Enter Last Name" value={this.state.lName} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input  className="form-control" name="phone" placeholder="Enter Phone Number" value={this.state.phone} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input  className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input  className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign In</button>
                    </form>
                </div>
               </div>
            </div>

        );
    }
}

export default Signup;
