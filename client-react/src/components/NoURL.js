// React and Router Imports //
import React from "react";
import axios from "axios";
import '../styles/NoURL.css';

// Image Imports
import logo from '../img/mq01.png';

class NoURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.nuName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/NoURL";
    axios.get(url).then(response => this.setState({ NoURL: response.data }));
  };


  render() {
    return (
      <body>
      <div id="win1">
          <nav className="nav01">
            <img src={logo} className="logo" alt="main-quest logo"/>
        </nav>
        <div className="mncont1">
        </div>
      </div>
  </body>
    );
  }
}

export default NoURL;
