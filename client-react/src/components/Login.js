import React from "react";
import {login} from './UserFunctions';
// import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';



class Login extends React.Component {
    constructor () {
        super();
        this.state = {
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
           email: this.state.email,
           password: this.state.password
       }

       login(user).then(res => {
           if(res) {
               this.props.history.push('/tenantProfile')
           }
       })
   }

    

    render() {
        return (
            <div className="container">
               <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form  onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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

export default Login;
