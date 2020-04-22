import React from "react";
import axios from "axios";
import '../task.min.css';
import Table from 'react-bootstrap/Table';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props);
    this.state = { tickets: [], status: 'Pending', value: '', categoryValue: '', subCategoryValue: '', priorityValue: '', accessValue: '' };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleAccessChange = this.handleAccessChange.bind(this);
    this.category = React.createRef();
    this.subCategory = React.createRef();
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
      category: this.category.current.value,
      subCategory: this.subCategory.current.value,
      priority: this.priority.current.value,
      access: this.access.current.value,
      note: this.note.current.value
    }).then(response => {
      this.getTickets();
      this.category.current.value = "";
      this.subCategory.current.value = "";
      this.priority.current.value = "";
      this.access.current.value = "";
      this.note.current.value = "";
    });
  };

  handleCategoryChange(event) {
    this.setState({ categoryValue: event.target.value });
  }
  handleSubCategoryChange(event) {
    this.setState({ subCategoryValue: event.target.value });
  }
  handlePriorityChange(event) {
    this.setState({ priorityValue: event.target.value });
  }
  handleAccessChange(event) {
    this.setState({ accessValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Create New Maintenance Request Ticket</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Service Priority Level</th>
              <th>Property Access</th>
              <th>Problem Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>
                <form>
                  <select value={this.state.categoryValue} onChange={this.handleCategoryChange} ref={this.category}>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option defaultValue="hvac">HVAC</option>
                    <option value="appliances">Appliances</option>
                  </select>
                </form>
              </td>
              
              <td>
                <form>
                  <select value={this.state.priorityValue} onChange={this.handlePriorityChange} ref={this.priority}>
                    <option value= {1} >High Priority</option>
                    <option value={2}>Medium-High Priority</option>
                    <option value={3}>Medium Priority</option>
                    <option value={4}>Medium-Low Priority</option>
                    <option value={5}>Low Priority</option>
                  </select>
                </form>
              </td>
              <td>
                <form>
                  <select value={this.state.accessValue} onChange={this.handleAccessChange} ref={this.access}>
                    <option value="true" >Access Granted</option>
                    <option value="false" >Access Denied</option>
                  </select>
                </form>
              </td>
              <td><input ref={this.note} /></td>
              <td><button onClick={this.createTicket}>Create Ticket</button></td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <div><h4>Current Ticket Status</h4><h5>{this.state.status}</h5></div>
      </div>
    );
  }
}

export default CreateTicket;
