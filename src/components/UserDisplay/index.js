import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";

const UserDisplay = ({login, profilePhoto, weblink, repocount}) => {
  return (
    <Card className="my-1 bg-black text-light text-start ">
      <Row className="align-items-center flex-nowrap">
          <Card.Img
            className=" d-inline card-img-left  example-card-img-responsive my-1 "
            src={`${profilePhoto}`}
            style={{maxHeight:'150px',maxWidth:'150px', }}
          />
          <Card.Body className="d-inline" >
            <Card.Title className=" mt-2 fs-2">{login}</Card.Title>
            <Card.Title className=" mt-2 fs-8">{`${repocount} Repo(s)`}</Card.Title>
            <i class="bi bi-link"></i>
            <Card.Link className="mx-2 d-inline" 
            target="_blank"
           rel="noreferrer" 
           href={`${weblink}`}>{weblink}</Card.Link>
            <i class="bi bi-envelope"></i>
            <Card.Link className="mx-2"href="hello@getfutureproof.co.uk">hello@getfutureproof.co.uk</Card.Link>
          </Card.Body>
      </Row>
    </Card>
  );
};

export default UserDisplay;
