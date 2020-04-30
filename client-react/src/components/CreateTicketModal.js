import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CreateTicket from "./CreateTicket";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import '../Styling.css'

const Style = styled.div`
background-color: lightgrey;
padding: 0px;
font-family: "Rajdhani", sans-serif;

.btn {
    width: 180px;
}
.btn:hover {
    box-shadow: 0px 0px 5px darkorange, 0px 0px 50px gold;
    border-radius: 5px;
}
`;

const CreateTicketModal = () => {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// JSX Rendering
return (
        <Style>

        <Button id="tButton1" variant="warning" onClick={handleShow}>Create Ticket</Button>

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Ticket Request</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <CreateTicket />
        </Modal.Body>

        <Modal.Footer>

        <Button id="" variant="warning" onClick={handleClose}>Close</Button>

        </Modal.Footer>
        </Modal>

        </Style>
);
};

export default CreateTicketModal;