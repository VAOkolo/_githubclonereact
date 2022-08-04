import React from 'react'
import { Col, Container, Figure, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Error = () => {
  
  return (
    <Container fluid >
 <Row>
 <Col sm={12}>
   <Col sm={12} className='my-2 bg-black text-light text-start ' border="secondary">
  <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src="https://cdn-media-1.freecodecamp.org/images/1*FFYtzf28XKPFBdknfXf-jg.jpeg"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  </Col>
 </Col>
 
 </Row>
  
    </Container>
   
  
  )
}

export default Error