import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Results() {
  const [open, setOpen] = useState(false);

  return (
    <div className='results'>
      <h1>Showing Results for Chicago, Illinois</h1>
      <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>Image Here</Col>
        <Stack>
          <Col>Name/Role</Col>
          <Col>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
            + See campaign funding
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </Col>
        <Col>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
        + See voting records
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </Col>
        </Stack>
      </Row>

      <Row xs={2} md={4} lg={6}>
        <Col>Image Here</Col>
        <Stack>
          <Col>Name/Role</Col>
          <Col>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
            + See campaign funding
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </Col>
        <Col>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
        + See voting records
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </Col>
        </Stack>
      </Row>

      <Row xs={2} md={4} lg={6}>
        <Col>Image Here</Col>
        <Stack>
          <Col>Name/Role</Col>
          <Col>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
            + See campaign funding
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </Col>
        <Col>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
        + See voting records
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </Col>
        </Stack>
      </Row>
      
    </Container>
    </div>
  );
}

export default Results;