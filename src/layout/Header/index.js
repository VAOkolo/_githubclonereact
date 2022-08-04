import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { getFollowers, getResult } from "../../actions";
import { useSelector } from 'react-redux'

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const landerStatus = useSelector(state => state.lander)
  const error = useSelector(state => state.error)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am event value", searchTerm);
    dispatch(getResult(searchTerm));
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
    <>
      <Navbar className="bg-dark" bg="dark" expand="lg" style={{ borderBottom: "1px solid grey" }}>
        <Container   className="bg-dark">
          <Navbar.Brand
            href="#home"
            className="bg-dark text-secondary text-start"
          >
            <i class="bi bi-github me-3"></i>Github
          </Navbar.Brand>
          <Navbar.Collapse  className="bg-dark" id="basic-navbar-nav">
            <Nav className="me-auto bg-dark">
              <Nav.Link className="text-light bg-dark" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light bg-dark" href="#link">
                Link
              </Nav.Link>
              {/* <NavDropdown
                className="text-light bg-dark"
                title="More Actions"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="text-light bg-dark" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          { landerStatus ?
                <Form  className="bg-dark" onSubmit={handleSubmit}>
                      <Form.Group className="d-flex bg-dark mt-2 me-5 pe-5" controlId="formSearch">
                <Form.Control  onChange={updateInput} value={searchTerm} type="text" placeholder="Enter github username" />
                <Button className="ms-3" variant="dark" type="submit">
                Submit
              </Button>
              </Form.Group>
                    {error && <div className="bg-dark text-muted"> Sorry, no repo's found!</div>}
                </Form> : ""}
          


          {/* <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={updateInput} />
            <button type="submit"> submit</button>
          </form> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
