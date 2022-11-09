import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Spinner } from "react-bootstrap";
import { codeProps } from "../data/types";

function NavComponent({
  stateCode,
  district,
  members,
  setStateCode,
  setDistrict,
}: codeProps) {
  return (
    <>
      <Navbar
        key="false"
        expand="false"
        className="xxl mb-3"
        onClick={() => {
          setStateCode("");
          setDistrict("");
        }}
      >
        <Container fluid>
          <Navbar.Brand bsPrefix="title" as={Link} to="/">
            MyRepInfo
            {stateCode && !district && members.length === 0 ? (
              <Spinner animation="border" />
            ) : (
              ""
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComponent;
