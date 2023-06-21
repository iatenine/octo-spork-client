import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

function Tutorial() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        data-testid={"tutorial-toggle-btn"}
        variant="primary"
        onClick={handleShow}
      >
        ?
      </Button>

      <Modal data-testid={"tutorial-modal"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Use: MyRepInfo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">
              Select your state or territory code
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Specify your congressional district (optional)
            </ListGroup.Item>
            <ListGroup.Item as="li">
              View information regarding your representives
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Tutorial;
