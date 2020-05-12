import React from "react";
import axios from "axios";
import '../task.min.css';

class AssignTech extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
        this.select1 = React.createRef();
        this.dueDate = React.createRef();
    }

    componentDidMount() {}

    addTechs = () => {
        let url = "http://localhost:3001/ticketHistory/" + parseInt(this.props.ticketDetail.ticketId);
        let dateMulti = 86400000 * parseInt(this.dueDate.current.value);
        let setDate = new Date(Date.now() + dateMulti ).toISOString(); 
        axios.put(url, {
            tech: this.select1.current.value,
            dueDate: setDate
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
                            {this.props.skilledTechs.map(p => (
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