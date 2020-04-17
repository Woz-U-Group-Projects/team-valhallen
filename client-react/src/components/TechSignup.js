import React from "react";
import axios from "axios";
import '../task.min.css';

class Tech extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tech: [], value: [] };
        this.fName = React.createRef();
        this.lName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.phone = React.createRef();
        this.select1 = React.createRef();
        this.select2 = React.createRef();
        this.select3 = React.createRef();
        this.select4 = React.createRef();
        this.select5 = React.createRef();
        this.additionalComments = React.createRef();
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // Express uses port 3001 (react uses 3000)
        let url = "http://localhost:3001/techs/";
        axios.get(url).then(response => this.setState({ tech: response.data }));
    };
    addTechs = () => {
        let url = "http://localhost:3001/techs/";
        axios.post(url, {
            fName: this.fName.current.value,
            lName: this.lName.current.value,
            email: this.email.current.value,
            password: this.password.current.value,
            phone: this.phone.current.value,
            select1: this.select1.current.value,
            select2: this.select2.current.value,
            select3: this.select3.current.value,
            select4: this.select4.current.value,
            select5: this.select5.current.value,
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

            // this.electrical.current.value = "",
            // this.plumbing.current.value = "",
            // this.hvac.current.value = "",
            // this.appliance.current.value = "",
            this.additionalComments.current.value = "";
        });
    };

    render() {
        return (
            <div>
                <form>
                    <h3>First Name</h3>
                    <input ref={this.fName} />
                    <h3> Second Name</h3>
                    <input ref={this.lName} />
                    <h3>Email</h3>
                    <input ref={this.email} />
                    <h3>Password</h3>
                    <input ref={this.password} />
                    <h3>Phone</h3>
                    <input ref={this.phone} />
                    <h3>Specialties</h3>
                    <div>
                        <select ref={this.select1}>
                            <option>None</option>
                            <option>Carpentry</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>Hvac</option>
                            <option>Appliance</option>
                        </select>
                        <select ref={this.select2}>
                            <option>None</option>
                            <option>Carpentry</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>Hvac</option>
                            <option>Appliance</option>
                        </select>
                        <select ref={this.select3}>
                            <option>None</option>
                            <option>Carpentry</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>Hvac</option>
                            <option>Appliance</option>
                        </select>
                        <select ref={this.select4}>
                            <option>None</option>
                            <option>Carpentry</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>Hvac</option>
                            <option>Appliance</option>
                        </select>
                        <select ref={this.select5}>
                            <option>None</option>
                            <option>Carpentry</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>Hvac</option>
                            <option>Appliance</option>
                        </select>
                    </div>
                    <textarea ref={this.additionalComments} rows="10" cols="50" name="message"></textarea>
                    <button type="button" className="btn btn-primary" onClick={this.addTechs}>add User</button>
                </form>
            </div>
        );
    }
}

export default Tech;