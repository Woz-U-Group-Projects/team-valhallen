import React from "react";
import axios from "axios";
import '../task.min.css';

class Managers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { manager: [], value: [] };
        this.fName = React.createRef();
        this.lName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.phone = React.createRef();
        this.additionalComments = React.createRef();
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Express uses port 3001 (react uses 3000)
        let url = "http://localhost:3001/managers/";
        axios.get(url).then(response => this.setState({ manager: response.data }));
    };
    addManager = () => {
        let url = "http://localhost:3001/managers/";
        axios.post(url, {
            fName: this.fName.current.value,
            lName: this.lName.current.value,
            email: this.email.current.value,
            password: this.password.current.value,
            phone: this.phone.current.value,
            additionalComments: this.additionalComments.current.value,
        }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            this.fName.current.value = "";
            this.lName.current.value = "";
            this.email.current.value = "";
            this.password.current.value = "";
            this.phone.current.value = "";
            this.additionalComments.current.value = "";
        });
    };

    render() {
        return (
            <div>
                <form>
                    <h3>First Name</h3>
                    <input ref={this.fName} />
                    <h3> Last Name</h3>
                    <input ref={this.lName} />
                    <h3>Email</h3>
                    <input ref={this.email} />
                    <h3>Password</h3>
                    <input ref={this.password} />
                    <h3>Phone</h3>
                    <input ref={this.phone} />
                    <h3>Additional Comments</h3>
                    <textarea ref={this.additionalComments} rows="10" cols="50" name="message"></textarea>
                    <button type="button" className="btn btn-primary" onClick={this.addManager}>add User</button>
                </form>
            </div>
        );
    }
}

export default Managers;