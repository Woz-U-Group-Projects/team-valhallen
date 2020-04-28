import React from "react";
import axios from "axios";
import '../task.min.css';

class TechAssingn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
        this.select1 = React.createRef();
    }

    componentDidMount() {
        this.getTechs();
    }

    getTechs() {
        let url = "http://localhost:3001/users/techs/";
        axios.get(url).then(response => this.setState({ users: response.data }));
        // this.setState({ viewConfirm: false, newTrigger: false });
    };


    addTechs = () => {
        let url = "http://localhost:3001/users/ticket/";
        axios.put(url, {
            select1: this.select1.current.value,
        })
    };
    
    render() {
        return (
            <div>

                <form>
                    <h3>Specialties</h3>
                    <div>
                    <select ref={this.select1}>
                        {this.state.users.map(p => (
                            <option key={p.userId}>
                                {p.fName} {p.lName}
                            </option>
                        ))}
                    </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.addTechs}>Assign Tech</button>
                </form>
            </div>
        );
    }
}

export default TechAssingn;