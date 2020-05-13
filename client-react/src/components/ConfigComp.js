import React from "react";
import axios from "axios";
import '../task.min.css'
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
// import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap';

class ConfigComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { units: [] };
        this.unitName = React.createRef();
    }

    componentDidMount() {
        this.getUnits();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.units !== prevState.units) {
    //         this.getUnits(this.state.units);
    //     }
    // }

    getUnits = () => {
        let url = "http://localhost:3001/propertyUnits/";
        axios.get(url).then(response => this.setState({ units: response.data }));
    };

    createUnit = () => {
        let url = "http://localhost:3001/propertyUnits/";
        axios.post(url, {
        unitName: this.unitName.current.value
        }).then(response => {this.unitName.current.value = "";});
        alert("Unit " + this.unitName.current.value + " has been created");
    };

    removeUnit = (event) => {
        let url = "http://localhost:3001/propertyUnits/" + event.target.name;
        axios.delete(url).then(response => {
          alert("Unit has been deleted")
        });
        this.getUnits();
    };


    render() {

        return (
            <div>
                <h2>Add Units Here</h2>
                <form>
                    <div>Unit Name</div>
                    <input ref={this.unitName} />
                </form>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.createUnit}>Create Unit</button>
                </div>

                <Card>
                <Card.Title>Building Configuration</Card.Title>
                <Card.Body>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Unit Number</th>
                                <th>Unit Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.state.units.map(p => ( 
                                <tr key={p.unitId}>
                                    <td>{p.unitId}</td>
                                    <td>{p.unitName}</td>
                                    <td><button type="button" className="btn btn-primary" name={p.unitId} onClick={this.removeUnit}>Remove Unit</button></td>
                                </tr>
                            ))} 
                        </tbody>
                    </Table>
                </div>
                </Card.Body>
                </Card>

                

            </div>
        );
    }
}

export default ConfigComp;