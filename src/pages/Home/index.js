import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import { UserDisplay, RepoDisplay, People, TopLanguages } from "../../components";
import { useState, useEffect } from 'react'
import  getResult  from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

  const name = useSelector(state => state.name)

  useEffect(() => {
    getResult()
    console.log(name)
  },[name])
  
  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container fluid className="bg-black">
      {/* This is the top row */}
      <Row>
        {/* displayer user info / profile */}
        <Col sm={12}>
          <UserDisplay />
        </Col>
      </Row>
      {/* This is the Second row which renders repo and people section. On small screens every column is 12units wide - so effectively a row -  but on medium and above they will break into columns*/}
      <Row className="align-items-start">
        {/* display repos section */}
        <Col sm={12} md={9} xl={10}>
          {testData.map((item) => (
            <RepoDisplay />
          ))}
        </Col>
             {/* display people section */}
        <Col sm={12} md={3} xl={2}>
            <People />
            <TopLanguages />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
