import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap/'
import {UserDisplay, RepoDisplay } from '../../components'


const Home = () => {
    const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Container fluid>
    <Row>

    {/* displayer user info / profile */}
    <Col sm={12}>
    <UserDisplay />
    </Col>


    {/* display repos section */}
    <Col sm={12}>
    {testData.map( item => <RepoDisplay />   )}
    

    </Col>




    
    
    </Row>
   
    </Container>
  

  )
}

export default Home
