import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TenantDetailRetrieve from './TenantDetailRetrieve';
import TenantDetailEdit from './TenantDetailEdit';
import '../Styling.css'

const UniversalModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
            Universal Modal
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TenantDetailEdit />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    
                </Modal.Footer>
            </Modal>
            </>
    ) 

}


export default UniversalModal;