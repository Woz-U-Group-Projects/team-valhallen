import React from "react";
import axios from "axios";
import '../Styling.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


class AddUserDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = { users: [], units: [], electrical: false, plumbing: false, hvac: false, appliance: false, general: false, userId: 6, value: "", name: "" }
    this.unitName = this.unitName.bind(this)
    this.techId = React.createRef();
    this.electrical = React.createRef();
    this.plumbing = React.createRef();
    this.hvac = React.createRef();
    this.appliance = React.createRef();
    this.general = React.createRef();
    this.unitName = React.createRef();
    
  }

  componentDidMount() {
    this.getUnits();
  }

  unitName(event) {
    this.setState({ value: event.target.value, ref: event.target.ref });
  }

  addSkills = () => {
    let urla = "http://localhost:3001/users/techSkills/";
    let urlb = "http://localhost:3001/users/newConfirmType/";
    axios.post(urla, {
      userId: this.props.userDetail.userId,
      electrical: this.state.electrical,
      plumbing: this.state.plumbing,
      hvac: this.state.hvac,
      appliance: this.state.appliance,
      general: this.state.general
    }).then(response => {
      // empty the input
      this.electrical.current.checked = false;
      this.plumbing.current.checked = false;
      this.hvac.current.checked = false;
      this.appliance.current.checked = false;
      this.general.current.checked = false;
    });
    axios.put(urlb, {
      userId: this.props.userDetail.userId,
      userType: "Technician",
      unitId: 500
    }).then(response => {
      //redirect to userpage
    })
  };
  handleCheck = (event, fieldName, isCheckbox) => {
    this.setState({ [fieldName]: isCheckbox ? event.target.checked : event.target.checked })
  };

  getUnits = () => {
    let url = "http://localhost:3001/propertyUnits/";
    axios.get(url).then(response => this.setState({ units: response.data }));
  };

  addUnit = () => {
    let urla = "http://localhost:3001/users/unitNumber/";
    let urlb = "http://localhost:3001/users/newConfirmType/";
    axios.put(urla, {
      userId: this.props.userDetail.userId,
      unitId: this.unitName.current.value
    }).then(response => {
      // this.unitNumber.current.value = "";
    });
    axios.put(urlb, {
      userId: this.props.userDetail.userId,
      userType: "Tenant",
      unitId: this.unitName.current.value
      //unitName: this.unitName.current.ref
    })
  };

  newManager = () => {
    let url = "http://localhost:3001/users/newConfirmType/";
    axios.put(url, {
      userId: this.props.userDetail.userId,
      userType: "Manager",
      unitId: 1000
    })
  };

  deleteUser = () => {
    let url = "http://localhost:3001/users/" + this.props.userDetail.userId;
    axios.delete(url).then(response => {
      alert("User has been deleted")
    });
  };

  // JSX Rendering
  render() {
    return (
      <div>
        <CardGroup>
          <Card>
            <Card.Header>
              <Card.Title as="h3">New Tenant</Card.Title>
            </Card.Header>
            <Card.Body>
            <select ref={this.unitName}
          name="unitNumber"
          value={this.state.title}
          onChange={event => this.handleCheck(event, "title")}>
              {this.state.units.map(p => (
                  <option key={p.unitId} value={p.unitId} ref={p.unitName}>
                      {p.unitName}
                  </option>
              ))}
          </select>
            </Card.Body>
            <Card.Footer>
              <button type="button" className="btn btn-primary" onClick={this.addUnit}>Assign Unit</button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">New Technician</Card.Title>
            </Card.Header>
            <Card.Body>
              <label htmlFor="electricalCheck">Electrical</label>
              <input ref={this.electrical}
                type="checkbox"
                name="electricalCheck"
                checked={this.state.electrical}
                onChange={event => this.handleCheck(event, "electrical", true)}
                label="Electrical" /><br/>

              <label htmlFor="plumbingCheck">Plumbing</label>
              <input ref={this.plumbing}
                type="checkbox"
                name="plumbingcheck"
                checked={this.state.plumbing}
                onChange={event => this.handleCheck(event, "plumbing", true)}
                label="plumbing" /><br/>

              <label htmlFor="hvacCheck">HVAC</label>
              <input ref={this.hvac}
                type="checkbox"
                name="hvacCheck"
                checked={this.state.hvac}
                onChange={event => this.handleCheck(event, "hvac", true)}
                label="hvac" /><br/>

              <label htmlFor="applianceCheck">Appliance</label>
              <input ref={this.appliance}
                type="checkbox"
                name="applianceCheck"
                checked={this.state.appliance}
                onChange={event => this.handleCheck(event, "appliance", true)}
                label="appliance" /><br/>

              <label htmlFor="generalCheck">General</label>
              <input ref={this.general}
                type="checkbox"
                name="generalCheck"
                checked={this.state.general}
                onChange={event => this.handleCheck(event, "general", true)}
                label="general" />
            </Card.Body>
            <Card.Footer>
              <button type="button" className="btn btn-primary" onClick={this.addSkills}>Add Skills</button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">New Manager</Card.Title>
            </Card.Header>
            <Card.Body>
              <button type="button" className="btn btn-primary" onClick={this.newManager}>Add New Manager</button>
            </Card.Body>
            <Card.Footer>
              <Card.Title>Delete User</Card.Title>
              <button type="button" className="btn btn-danger" onClick={this.deleteUser}>Delete User</button>
            </Card.Footer>
          </Card>
        </CardGroup>
        
      </div>
    );
  }
}

export default AddUserDetail;
