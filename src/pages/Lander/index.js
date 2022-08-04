import React from "react";
import { Col, Container, Figure, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers, getResult } from "../../actions";
import { useNavigate } from "react-router-dom";

const Lander = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const error = useSelector(state => state.error)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am event value", searchTerm);
    dispatch(getResult(searchTerm));
    navigate("/searched", { replace: true });
    // dispatch(getFollowers(searchTerm))
  };
  const updateInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setSearchTerm(input);
  };



  useEffect(() => {
    // setSearchTerm("github");
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Col
            sm={12}
            className="my-2 bg-black text-light text-start "
            border="secondary"
          >
            <div className="searchDiv">
              <div className=""></div>
              <div className="bar">
                <form onSubmit={handleSubmit}>
                  {/* <input onChange={updateInput} className="searchBar" type="text" title="Search" value={searchTerm}></input> */}
                  {/* <button className="searchButton">Search</button> */}
                  <div className="d-flex justify-content-center">
                    <input id="search-btn" type="checkbox" />
                    <label for="search-btn">Show search bar</label>
                    <input
                      id="search-bar"
                      type="text"
                      placeholder="Search..."
                      onChange={updateInput}
                      value={searchTerm}
                    />
                     {error && <div className="bg-dark text-muted"> Sorry, no repo's found!</div>}
                  </div>
                 
                </form>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Lander;
