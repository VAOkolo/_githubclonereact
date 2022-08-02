import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import { UserDisplay, RepoDisplay, People } from "../../components";


const Home = () => {
  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container fluid className="bg-dark">
      {/* This is the top row */}
      <Row>
        {/* displayer user info / profile */}
        <Col sm={12}>
          <UserDisplay />
        </Col>
      </Row>
      {/* This is the Second row which renders repo and people section. On small screens every column is 12units wide - so effectively a row -  but on medium and above they will break into columns*/}
      <Row>
        {/* display repos section */}
        <Col sm={12} md={8}>
          {testData.map((item) => (
            <RepoDisplay />
          ))}
        </Col>
             {/* display people section */}
        <Col sm={12} md={4}>
            <People />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
