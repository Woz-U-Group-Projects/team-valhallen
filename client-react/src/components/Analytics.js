import React from "react";
import axios from "axios";
import '../task.min.css'
import UserList from "./UserList";
import UserDetailRetrieve from "./UserDetailRetrieve";
import Card from "react-bootstrap/Card"
import { CardGroup } from "react-bootstrap";

class Analytics extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            viewConfirm: false,
            newTrigger: false,
            pastDueTkts: [],
            qtyPendTkts: 'numberOfTickets',
            backlogTech: 'techName',
            backlogQty: 'numberOfTickets',
            busyUnits: 'unitName',
            problemArea: 'category name'
        };
        this.techQuery = this.techQuery.bind(this)
    }

    componentDidMount() {
        
        console.log(this.props.userList);
    }
    techQuery(event) {
        event.preventDefault()
        const { techCall } = this.props
        techCall()
    };

    getTechs() {
        let url = "http://localhost:3001/users/techs";
        axios.get(url).then(response => this.setState({ users: response.data }));
        this.setState({ viewConfirm: false, newTrigger: false });
    };
    render() {
        return (
            <div>

                <CardGroup>
                    {this.props.usersList.map(p => (
                        <Card className="text-center" style={{ width: '18 rem' }} key={p.userId}>
                            <Card.Header>{p.fName} {p.lName}</Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    ))}
                </CardGroup>

            </div>
        );
    }
}

export default Analytics;