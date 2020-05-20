import React from "react";
import axios from "axios";
import '../task.min.css';
import { Form, Button, Card } from "react-bootstrap";

class AssignTech extends React.Component {
    constructor (props) {
        super(props);
        this.state = { users: [] };
        this.select1 = React.createRef();
        this.dueDate = React.createRef();
    }

    componentDidMount() {

    }

    addTechs = () => {
        let url = "http://localhost:3001/ticketHistory/" + parseInt(this.props.ticketDetail.ticketId);
        let dateMulti = 86400000 * parseInt(this.dueDate.current.value);
        let setDate = new Date(Date.now() + dateMulti).toISOString();
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
            <div className="container">

                <Card style={{ width: '40rem' }} className="text-center" >
                    <Card.Header as="h3">Assign Technician/Due Date</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Assign Technician</Form.Label>
                                <Form.Control as="select" ref={this.select1}>
                                    {this.props.skilledTechs.map(p => (
                                        <option key={p.userId} value={p.userId}>
                                            {p.fName} {p.lName}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Set Due Date</Form.Label>
                                <Form.Control as="select" multiple ref={this.dueDate}>
                                    <option value="1">1 Day</option>
                                    <option value="3">3 Days</option>
                                    <option value="7">7 Days</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Button type="button" className="btn btn-primary" onClick={this.addTechs}>Assign Tech</Button>
                    </Card.Footer>
                </Card>

            </div>
        );
    }
}

export default AssignTech;