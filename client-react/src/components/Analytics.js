import React from "react";
// import axios from "axios";
import '../task.min.css'

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

    pastDue = () => {
        //ticket #'s that are past due
    };

    qtyPending = () => {
        //qty of tickets in pending
    };

    backlog = () => {
        //if tech has more than (#) tickets assigned to them, alert
    }; 

    busyUnits = () => {
        //if unit has had (#) tickets within past 90 days, alert
    };

    troubleArea = () => {
        //if (#) of a certain category has occured in all units within in the past 90 days, alert
    }

    //#tickets on hold

    render() {
        return (
            <div>
                <h3>Analytics</h3>
            </div>
        );
    }
}

export default Analytics;