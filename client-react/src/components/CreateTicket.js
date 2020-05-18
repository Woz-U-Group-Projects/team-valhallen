import React from "react";
import axios from "axios";
import '../Styling.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props);
    this.state = { tickets: [], userId: this.props.assignUserId, unitId: this.props.assignUnitId, status: 'Pending', mainNote: 'technician notes...', dueDate: new Date(Date.now()).toISOString() }
    this.category = React.createRef();
    this.priority = React.createRef();
    this.access = React.createRef();
    this.note = React.createRef();
    // this.dueDate = new Date(Date.now()).toISOString();
  }

  componentDidMount() {

  }


  createTicket = () => {
    let dateMulti = 86400000 * parseInt(7);
    let url = "http://localhost:3001/tickets/";
    axios.post(url, {
      dueDate: this.state.dueDate + dateMulti,
      userId: this.state.userId,
      unitId: this.state.unitId,
      category: this.category.current.value,
      priority: this.priority.current.value,
      access: this.access.current.value,
      note: this.note.current.value,
      status: this.state.status,
      mainNote: this.state.mainNote
    }).then(response => {
      this.category.current.value = "";
      this.priority.current.value = "";
      this.access.current.value = "";
      this.note.current.value = "";
    });
  };


  // JSX Rendering
  render() {

    return (
      <Card className="text-center" style={{ width: '24rem' }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>User Id: {this.state.userId} <br /> Unit Number: {this.state.unitId}</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Service Priority Level</Form.Label>
              <Form.Control as="select"  ref={this.priority}>
                <option value={1}>High Priority</option>
                <option value={2}>Medium Priority</option>
                <option value={3}>Low Priority</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Problem Category</Form.Label>
              <Form.Control as="select"  ref={this.category}>
                <option value="electrical">Electrical</option>
                <option value="plumbing">Plumbing</option>
                <option value="hvac">HVAC</option>
                <option value="appliances">Appliances</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Problem Notes</Form.Label>
              <Form.Control as="textarea" rows="3" ref={this.note} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Technician Access</Form.Label>
              <Form.Control as="select"  ref={this.access}>
                <option value="true" >Access Granted</option>
                <option value="false" >Access Denied</option>
              </Form.Control>
            </Form.Group>
            <Button variant="warning" onClick={this.createTicket}>
              Submit Ticket
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default CreateTicket;
