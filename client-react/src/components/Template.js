import React from "react";
import axios from "axios";
import '../template.css';





// Extends the prop

class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp1: [] };
    this.sampleName = React.createRef();
  }

// Prop did mount

  componentDidMount() {
    this.getData();
  }

  // Connects the prop

  getData = () => {
    let url = "http://localhost:3001/template";
    axios.get(url).then(response => this.setState({ temp1: response.data }));
  };

  // Renderes the prop

  render() {
    return (

// Template JSX Window

      <body>
          <div id="win1">
              <nav className="nav01">
                <img src={logo} className="logo" alt="main-quest logo"/>
                <div className="mncnt1">
                <img src={menu} className="menu" alt="menu button" />
                </div>
                <div className="btndvid">
                <img src={headtext} className="hdtxt1" alt="header text" />
                <button className="btn1"><img className="tsttxt" src={test} alt="testbutton"></img></button>
                <button className="btn2"><img className="tsttxt" src={test} alt="testbutton"></img></button>
                <button className="btn3"><img className="tsttxt" src={test} alt="testbutton"></img></button>
                </div>
            </nav>
            <div className="mncont1">
            </div>
          </div>
      </body>

// Template JSX Window
    
    );
  }
}

// Routing Data Goes Here! //
// The lines above are the styling //



export default Default;
