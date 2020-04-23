import React from "react";
import axios from "axios";
import '../task.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props);
    this.state = { tickets: [], status: 'Pending' }
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
    let url = "http://localhost:3001/tickets/";
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
      status: this.state.status
    }).then(response => {
      this.getTickets();
      this.unitId.current.value = "";
      this.category.current.value = "";
      this.priority.current.value = "";
      this.access.current.value = "";
      this.note.current.value = "";
    });
  };

  // handleCategoryChange(event) {
  //   this.setState({ categoryValue: event.target.value });
  // }
  // handlePriorityChange(event) {
  //   this.setState({ priorityValue: event.target.value });
  // }
  // handleAccessChange(event) {
  //   this.setState({ accessValue: event.target.value });
  // }

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
        <Button variant="primary" onClick={this.createTicket}>
          Save Changes
            </Button>
      </Form>

      // <div>
      //   <h1>Create New Maintenance Request Ticket</h1>
      //   <table striped bordered hover>
      //     <thead>
      //       <tr>
      //         <th>Unit Number</th>
      //         <th>Category</th>
      //         <th>Service Priority Level</th>
      //         <th>Property Access</th>
      //         <th>Problem Notes</th>
      //         <th></th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr >
      //         <td><input ref={this.unitId} /></td>
      //         <td>
      //           <form>
      //             <select /*value={this.state.categoryValue} onChange={this.handleCategoryChange} */ ref={this.category}>
      //               <option value="electrical">Electrical</option>
      //               <option value="plumbing">Plumbing</option>
      //               <option defaultValue="hvac">HVAC</option>
      //               <option value="appliances">Appliances</option>
      //             </select>
      //           </form>
      //         </td>

      //         <td>
      //           <form>
      //             <select /*value={this.state.priorityValue} onChange={this.handlePriorityChange}*/ ref={this.priority}>
      //               <option value={1} >High Priority</option>
      //               <option value={2}>Medium-High Priority</option>
      //               <option value={3}>Medium Priority</option>
      //               <option value={4}>Medium-Low Priority</option>
      //               <option value={5}>Low Priority</option>
      //             </select>
      //           </form>
      //         </td>
      //         <td>
      //           <form>
      //             <select /*value={this.state.accessValue} onChange={this.handleAccessChange}*/ ref={this.access}>
      //               <option value="true" >Access Granted</option>
      //               <option value="false" >Access Denied</option>
      //             </select>
      //           </form>
      //         </td>
      //         <td><input ref={this.note} /></td>
      //         <td><button onClick={this.createTicket}>Create Ticket</button></td>
      //       </tr>
      //     </tbody>
      //   </table>
      //   <hr />
      //   <div><h4>Current Ticket Status</h4><h5>{this.state.status}</h5></div>
      // </div>
    );
  }
}

export default CreateTicket;
