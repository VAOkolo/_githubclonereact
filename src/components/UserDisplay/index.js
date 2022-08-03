import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";

const UserDisplay = ({login, profilephoto, weblink}) => {
  return (
    <Card className="my-1 bg-black text-light text-start ">
      <Row className="align-items-center flex-nowrap">
        {/* <Col sm={2}> */}
          <Card.Img
            className=" d-inline card-img-left example-card-img-responsive my-1 "
            src={`${profilephoto}`}
            style={{maxHeight:'150px',maxWidth:'150px', }}
          />
        {/* </Col> */}
        {/* <Col sm={9}> */}
          <Card.Body className="d-inline" >
            <Card.Title className=" mt-2 fs-2">{login}</Card.Title>
            <i class="bi bi-link"></i>
            <Card.Link className="mx-2 d-inline " href={`${weblink}`}>{weblink}</Card.Link>
            <i class="bi bi-envelope"></i>
            <Card.Link className="mx-2"href="hello@getfutureproof.co.uk">hello@getfutureproof.co.uk</Card.Link>
          </Card.Body>
        {/* </Col> */}
      </Row>
    </Card>
  );
};

export default UserDisplay;
