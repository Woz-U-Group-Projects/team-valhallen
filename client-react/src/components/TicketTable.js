import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export default class TicketTable extends React.Component {
    render() {
        return (
            <Card text-align="center">
                <Card.Header text-align="center">
                    {this.props.headerTitle}
                </Card.Header>
                <Card.Body>
                    <Table variant="dark" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>{this.props.tableHeader1}</th>
                                <th>{this.props.tableHeader2}</th>
                                <th>{this.props.tableHeader3}</th>
                                <th>{this.props.tableHeader4}</th>
                                <th>{this.props.tableHeader5}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.tableBody1}</td>
                                <td>{this.props.tableBody2}</td>
                                <td>{this.props.tableBody3}</td>
                                <td>{this.props.tableBody4}</td>
                                <td>{this.props.tableBody5}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}