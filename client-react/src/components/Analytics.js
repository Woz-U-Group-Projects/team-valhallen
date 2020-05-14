import React from "react";
// import axios from "axios";
import '../task.min.css'
import Card from "react-bootstrap/Card"
import { CardGroup, Table } from "react-bootstrap";

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
                <CardGroup>
                    <Card className="text-center" style={{ width: '18 rem' }}>
                        <Card.Header as="h5">Tech 1</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <td>Work Load </td>
                                        <td># of Tickets</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pending</td>
                                        <td>{this.props.pendingTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>In-Progress</td>
                                        <td>{this.props.inProgressTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>On-Hold</td>
                                        <td>{this.props.onHoldTicketsNumber}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" style={{ width: '18 rem' }}>
                        <Card.Header as="h5">Tech 2</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <td>Work Load </td>
                                        <td># of Tickets</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pending</td>
                                        <td>{this.props.pendingTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>In-Progress</td>
                                        <td>{this.props.inProgressTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>On-Hold</td>
                                        <td>{this.props.onHoldTicketsNumber}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" style={{ width: '18 rem' }}>
                        <Card.Header as="h5">Tech 3</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <td>Work Load </td>
                                        <td># of Tickets</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pending</td>
                                        <td>{this.props.pendingTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>In-Progress</td>
                                        <td>{this.props.inProgressTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>On-Hold</td>
                                        <td>{this.props.onHoldTicketsNumber}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" style={{ width: '18 rem' }}>
                        <Card.Header as="h5">Tech 4</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <td>Work Load </td>
                                        <td># of Tickets</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pending</td>
                                        <td>{this.props.pendingTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>In-Progress</td>
                                        <td>{this.props.inProgressTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>On-Hold</td>
                                        <td>{this.props.onHoldTicketsNumber}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" style={{ width: '18 rem' }}>
                        <Card.Header as="h5">Tech 5</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <td>Work Load </td>
                                        <td># of Tickets</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pending</td>
                                        <td>{this.props.pendingTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>In-Progress</td>
                                        <td>{this.props.inProgressTicketsNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>On-Hold</td>
                                        <td>{this.props.onHoldTicketsNumber}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div >
        );
    }
}

export default Analytics;