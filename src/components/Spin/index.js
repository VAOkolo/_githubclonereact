import React from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { SpinnerRoundFilled } from "spinners-react";

const Spin = () => {
  return (
    <Container fluid>
      <Row sm={12} style={{ minvh: "90vh" }}>
        <Col className="d-flex align-items-center justify-content-center text-center min-vh-100">
          <SpinnerRoundFilled />
        </Col>
      </Row>
    </Container>
  );
};

export default Spin;
