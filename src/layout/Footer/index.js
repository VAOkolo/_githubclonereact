import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex  bg-dark fixed-bottom bg-dark text-secondary footer" sm={12}>
         
              <i class="bi bi-github me-3 bg-dark"></i>
              <p className="d-inline bg-dark">© 2022 GitHub, Inc.</p>
              <p className="d-inline ps-5 ms-5 bg-dark">
                Terms
              </p>
              <p className="d-inline ms-5 bg-dark">
                Privacy
              </p> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
