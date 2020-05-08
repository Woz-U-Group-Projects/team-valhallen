import React from "react";
// import axios from "axios";
import '../task.min.css'
import Card from "react-bootstrap/Card"

class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pastDueTkts: [], 
            qtyPendTkts: 'numberOfTickets', 
            backlogTech: 'techName', 
            backlogQty: 'numberOfTickets',
            busyUnits: 'unitName',
            problemArea: 'category name'  
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Card className="text-center" style={{ width: '18 rem' }}>
                    <Card.Body>
                <h6>New Tickets # {this.props.newTicketsNumber} 
                || Pending Tickets # {this.props.pendingTicketsNumber} 
                || In Progress Ticktes# {this.props.inProgressTicketsNumber}
                || On Hold Tickets# {this.props.onHoldTicketsNumber} 
                || Completed Tickets # {this.props.completedTicketsNumber}
                || Archived Tickets # {this.props.archivedTicketsNumber}
                </h6>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Analytics;