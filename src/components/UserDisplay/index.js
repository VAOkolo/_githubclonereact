import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";

const UserDisplay = () => {
  return (
    <Card className="my-1 bg-dark text-light text-start border-bottom border-secondary">
      <Row className="align-items-center">
        <Col sm={2} className="">
          <Card.Img
            className=" card-img-left example-card-img-responsive my-1 "
            src="https://avatars.githubusercontent.com/u/67379980?s=200&v=4"
            // style={{height:'200px',width:'200px', }}
          />
        </Col>
        <Col sm={8}>
          <Card.Body>
            <Card.Title className="mt-2">futureproof</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default UserDisplay;
