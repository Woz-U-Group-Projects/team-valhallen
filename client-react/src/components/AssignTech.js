import React from "react";
import axios from "axios";
import '../task.min.css';

class AssignTech extends React.Component {
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
    };

    addTechs = () => {
        let url = "http://localhost:3001/ticketHistory/" + parseInt(this.props.ticketDetail.ticketId);
        axios.put(url, {
            tech: this.select1.current.value,
            //dueDate: this.dueDate.current.value
        }).then(alert("Technician has been assigned"));
        //close component callback
        const { techAssigned } = this.props
        techAssigned()
    };


    render() {
        return (
            <div>
                <form>
                    <h3>Assign Technician</h3>
                    <div>
                        <select ref={this.select1}>
                            {this.state.users.map(p => (
                                <option key={p.userId} value={p.userId}>
                                    {p.fName} {p.lName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <h4>Set Due Date</h4>
                    <select ref={this.dueDate}>
                        <option value="1">1 Day</option>
                        <option value="3">3 Days</option>
                        <option value="7">7 Days</option>
                    </select>        
                    <button type="button" className="btn btn-primary" onClick={this.addTechs}>Assign Tech</button>
                </form>
            </div>
        );
    }
}

export default AssignTech;