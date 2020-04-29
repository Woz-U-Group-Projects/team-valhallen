import React from "react";
import axios from "axios";
import '../Styling.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props);
    this.state = { tickets: [], status: 'Pending', mainNote: 'technician notes...' }
    this.unitId = React.createRef();
    this.category = React.createRef();
    this.priority = React.createRef();
    this.access = React.createRef();
    this.note = React.createRef();
  }

  componentDidMount() {
    this.getTickets();
  }

  getTickets = () => {
    let url = "http://localhost:3001/tickets/createTicket";
    axios.get(url).then(response => this.setState({ tickets: response.data }));
  };

  createTicket = () => {
    let url = "http://localhost:3001/tickets/";
    axios.post(url, {
      unitId: parseInt(this.unitId.current.value),
      category: this.category.current.value,
      priority: this.priority.current.value,
      access: this.access.current.value,
      note: this.note.current.value,
      status: this.state.status,
      mainNote: this.state.mainNote
    }).then(response => {
      this.getTickets();
      this.unitId.current.value = "";
      this.category.current.value = "";
      this.priority.current.value = "";
      this.access.current.value = "";
      this.note.current.value = "";
    });
  };

  
  // JSX Rendering
  render() {
    return (

      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Unit Number</Form.Label>
          <Form.Control type="input" ref={this.unitId} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Problem Category</Form.Label>
          <Form.Control as="select" multiple ref={this.category}>
            <option value="electrical">Electrical</option>
            <option value="plumbing">Plumbing</option>
            <option value="hvac">HVAC</option>
            <option value="appliances">Appliances</option>

          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Service Priority Level</Form.Label>
          <Form.Control as="select" multiple ref={this.priority}>
            <option value={1}>High Priority</option>
            <option value={2}>Medium-High Priority</option>
            <option value={3}>Medium Priority</option>
            <option value={4}>Medium-Low Priority</option>
            <option value={5}>Low Priority</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Technician Access</Form.Label>
          <Form.Control as="select" multiple ref={this.access}>
            <option value="true" >Access Granted</option>
            <option value="false" >Access Denied</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Problem Notes</Form.Label>
          <Form.Control as="textarea" rows="3" ref={this.note} />
        </Form.Group>
        <Button variant="warning" onClick={this.createTicket}>
          Submit Ticket
            </Button>
      </Form>

      
    );
  }
}

export default CreateTicket;
