import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CreateTicket from "./CreateTicket";
import Modal from "react-bootstrap/Modal";
import '../Styling.css'



const CreateTicketModal = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // JSX Rendering
    return (
        <>

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

        </>
    )
}

export default CreateTicketModal;