import React from "react";
// import axios from "axios";
import '../task.min.css'
// import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap';

class ConfigComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { units: [], nameEntries: false };
        this.quantity = React.createRef();
    }


    componentDidMount() {

    }

    createUnits = () => {
        //let url = "http://localhost:3001/propertyUnits/";
        //axios.post(url, {
        //numberOfUnits: this.quantity.current.value
        alert("Units have been created");
        //}).then(response => {this.quantity.current.value = "";});
        //this.nameUnits();
        this.setState({ nameEntries: true });
    };

    nameUnits = () => {
        //let url = "http://localhost:3001/propertyUnits/";
        //axios.get(url).then(response => this.setState({ units: response.data }));
        this.setState({ nameEntries: true });
    };

    saveNames = () => {

    };

    render() {

        const nameUnits = this.state.nameEntries;
        let showEntries;

        if (nameUnits) {
            showEntries = 
                this.state.units.map(p => (
                    <div key={p.unitId}>
                        <div>
                            {p.unitId}
                            <input ref={this.unitName}></input>
                        </div>
                    </div>
                ))
        }

        return (
            <div>
                <h3>Building Configuration</h3>
                <form>
                    <Row>
                    <Col>
                    <label>Number of Units in Building</label>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <input ref={this.quantity} />
                    </Col>
                    </Row>
                    
                </form>
                <div>
                    <button type="button" className="btn btn-warning mt-3" onClick={this.createUnits}>Set Units</button>
                </div>

                <div>
                    { showEntries }
                </div>
            </div>
        );
    }
}

export default ConfigComp;