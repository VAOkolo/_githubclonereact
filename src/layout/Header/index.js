import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { getFollowers, getResult } from '../../actions';

const Index = () => {
  const [ searchTerm, setSearchTerm ] = useState("")
const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault()
console.log('i am event value', searchTerm)
  dispatch(getResult(searchTerm))
  dispatch(getFollowers(searchTerm))
}
const updateInput = e => {
  e.preventDefault()
  const input = e.target.value 
  setSearchTerm(input)
}
  // useEffect(()=> {

  // }, [])
  return (
    <>
    <Navbar  bg="black" expand="lg" style={{borderBottom: "1px solid grey"}}>
      <Container >
        <Navbar.Brand href="#home" className='bg-black text-secondary text-start'><i class="bi bi-github me-3"></i>Github</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light'  href="#link">Link</Nav.Link>
            <NavDropdown className='text-light'  title="More Actions" id="basic-nav-dropdown">
              <NavDropdown.Item className='text-light'  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <form onSubmit={handleSubmit}>
          <input type="text"  value={searchTerm} onChange={updateInput}/>
          <button type="submit"> submit</button>
        </form>
      </Container>
    </Navbar>
    </>
   

  
  )
}

export default Index
