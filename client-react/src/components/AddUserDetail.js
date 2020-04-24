import React from "react";
import axios from "axios";
import '../task.min.css';

class UppdateUserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], electrical: false, plumbing: false, hvac: false, appliance: false, general: false, userId: 6,value: ""}
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
    this.getData();
  }

  unitName(event) {
    this.setState({value: event.target.value});
  }

  getData = () => {

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/users/";
    axios.get(url).then(response => this.setState({ users: response.data }));
  };

  addSkills = () => {
    let url = "http://localhost:3001/users/techSkills/";
    axios.post(url, {
      electrical: this.state.electrical,
      plumbing: this.state.plumbing,
      hvac: this.state.hvac,
      appliance: this.state.appliance,
      general: this.state.general
    }).then(response => {
      // refresh the data
      // this.getData();
      // empty the input
      this.electrical.current.checked = false;
      this.plumbing.current.checked = false;
      this.hvac.current.checked = false;
      this.appliance.current.checked = false;
      this.general.current.checked = false;
    });
  };
  handleCheck = (event, fieldName, isCheckbox) => {
    this.setState({[fieldName]: isCheckbox ? event.target.checked: event.target.checked})
  };


  addUnit = () => {
    let url = "http://localhost:3001/users/unitNumber/"
    axios.put( url, {
      unitName: this.unitName.current.value,
      userId: this.state.userId
    }).then(response => {
      // this.unitNumber.current.value = "";

    });
  };


  
  render() {
    return (
      <div>
      <div>

        <h3> electrical</h3>
        <input ref={this.electrical} 
        type= "checkbox"
        name="electricalCheck"
        checked={this.state.electrical}
        onChange={event => this.handleCheck(event, "electrical", true)}
        label="Electrical"/>

        <h3>plumbing</h3>
        <input ref={this.plumbing} 
        type= "checkbox"
        name="plumbingcheck"
        checked={this.state.plumbing}
        onChange={event => this.handleCheck(event, "plumbing", true)}
        label="plumbing"/>

        <h3>hvac</h3>
        <input ref={this.hvac} 
        type= "checkbox"
        name="hvacCheck"
        checked={this.state.hvac}
        onChange={event => this.handleCheck(event, "hvac", true)}
        label="hvac"/>

        <h3>appliance</h3>
        <input ref={this.appliance} 
        type= "checkbox"
        name="applianceCheck"
        checked={this.state.appliance}
        onChange={event => this.handleCheck(event, "appliance", true)}
        label="appliance"/>

        <h3>general</h3>
        <input ref={this.general}
        type= "checkbox"
        name="generalCheck"
        checked={this.state.general}
        onChange={event => this.handleCheck(event, "general", true)}
        label="general"/>

        <button type="button" className="btn btn-primary" onClick={this.addSkills}>Add Skills</button>

      </div>
      <div>
        <select ref ={this.unitName}
        name="unitNumber"
        value={this.state.title}
        onChange={event => this.handleCheck(event, "title")}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <button type="button" className="btn btn-primary" onClick={this.addUnit}>Assign Unit</button>
      </div>
      </div>
    );
  }
}

export default UppdateUserDetail;
