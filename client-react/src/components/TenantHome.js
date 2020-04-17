import React from "react";
// import axios from "axios";
import '../task.min.css'
import TenantDetails from "./TenantDetails";
import TicketHistory from "./TicketHistory";
import CreateTicket from "./CreateTicket";

class TenantHome extends React.Component {
  constructor (props) {
    super(props);
    this.state = { users: [] };

  }

  componentDidMount() {
    // this.getData();
  }

  // getData = () => {
  //   let url = "http://localhost:3001/users/";
  //   axios.get(url).then(response => this.setState({ users: response.data }));
  // };



  render() {
    return (
      <div>
        <div>
          <TenantDetails />
        </div>
        <hr />
        <div>
          <TicketHistory />
        </div>
        <hr />
        <div>
          <CreateTicket />
        </div>
      </div>
    );
  }
}

export default TenantHome;