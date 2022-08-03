import React from 'react'
import Card from 'react-bootstrap/Card';


const RepoDisplay = ({fetchUserData}) => {
  return (
    <Card  className='my-2'>
    <Card.Body>
      <Card.Title>fp_study_notes_hello_github (name)</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Hello Github! (description)</Card.Subtitle>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text> */}
      <Card.Text>
        updated_app
      </Card.Text>
      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
  )
}

export default RepoDisplay
