import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap/'
import { useEffect } from 'react'

const UserDisplay = ({fetchUserData}) => {

  useEffect(() => {
    fetchUserData()
  },[])

  return (
    <Card className='my-5'>
    <Card.Body>
      <Card.Title>User display info here</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
      <p>{fetchUserData}</p>
    </Card.Body>
  </Card>
    
  )
}

export default UserDisplay
