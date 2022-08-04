import React from "react";
import {  Container, Row } from "react-bootstrap";


import { useState } from "react";
import { useDispatch } from "react-redux";
import { getResult } from "../../actions";
import { Lander } from "../../pages";

const Error = () => {
  return (
    <Container >
      <Row>
        <Lander />
      </Row>
    </Container>
  );
};

export default Error;
