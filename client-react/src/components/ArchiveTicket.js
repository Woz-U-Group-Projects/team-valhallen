import React from "react";
import axios from "axios";
import '../task.min.css';

class ArchiveTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    archTkt = () => {
        let url = "http://localhost:3001/ticketHistory/archTkt/" + parseInt(this.props.ticketDetail.ticketId);
        axios.put(url, {}).then(alert("Ticket has beed Archived"));
    };

    render() {
        return (
            <div>
                <form>
                    <h3>Archive Ticket</h3>        
                    <button type="button" className="btn btn-primary" onClick={this.archTkt}>Archive Ticket</button>
                </form>
            </div>
        );
    }
}

export default ArchiveTicket;