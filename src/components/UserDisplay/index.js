import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Stack } from "react-bootstrap/";
import { useSelector } from "react-redux";

// add blog, location, bio, twitter_username
const UserDisplay = ({ login, profilePhoto, weblink, repocount }) => {
  const extraUserData = useSelector((state) => state.userInfo);

  return (
    <Card className="my-1 bg-black text-light text-start ">
      <Row className="align-items-center flex-nowrap">
        <Card.Img
          className=" d-inline card-img-left  example-card-img-responsive my-1 "
          src={`${profilePhoto}`}
          style={{ maxHeight: "150px", maxWidth: "150px" }}
        />

        <Card.Body className="d-inline">
          <Card.Title className=" mt-2 fs-1">{login}</Card.Title>

          <Card.Text className="d-flex m-1  p-0 fs-9 text-muted">
            {extraUserData.bio && extraUserData.bio}
          </Card.Text>
          <Card.Text className="d-flex m-1 p-0 fs-9 text-muted">
            <span className="text-white"> Location: &nbsp;</span>
            {extraUserData.location ? extraUserData.location : 'Private'}
          </Card.Text>

          <Card.Text className="d-flex p-0 m-1 fs-9 text-muted">
            {" "}
            <span className="text-white">Repo's: &nbsp;</span>
            { repocount}
          </Card.Text>
    <div className="d-flex m1 text-wrap">
      <i class="bi bi-link"></i>
          <Card.Link
            className="mx-2 text-wrap "
            target="_blank"
            rel="noreferrer"
            href={`${weblink}`}
          >
            {weblink}
          </Card.Link>
    </div>
          
        </Card.Body>
      </Row>
    </Card>
  );
};

export default UserDisplay;
