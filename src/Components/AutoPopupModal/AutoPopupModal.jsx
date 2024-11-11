import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AutoPopupModal = () => {
    const [show, setShow] = useState(false);

    // Show modal after 30 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        return () => clearTimeout(timer); // Clear timer on component unmount
    }, []);

    const handleClose = () => setShow(false);
    

    return (
        <Modal show={show}
            onHide={handleClose}
            centered
            animation
            dialogClassName="custom-modal">
            <section className='bg-white border-0 text-dark'>
                <Modal.Header>
                    <Modal.Title>Welcome!</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a popup message displayed after 30 seconds.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </section>
        </Modal>
    );
};

export default AutoPopupModal;
