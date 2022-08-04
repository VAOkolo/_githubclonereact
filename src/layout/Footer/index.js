import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex fixed-bottom bg-primary text-secondary footer" sm={12}>
         
              <i class="bi bi-github me-3"></i>
              <p className="d-inline">© 2022 GitHub, Inc.</p>
              <p className="d-inline ps-5 ms-5">
                Terms
              </p>
              <p className="d-inline ms-5">
                Privacy
              </p> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
