import React from 'react'
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

const RepoDisplay = () => {
  return (
    <Card  className='my-2 bg-dark text-light text-start ' border="secondary" >
    <Card.Body >
      <Card.Title className='text-primary' >fp_study_notes_hello_github (name)</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">All study notes and guides for the futureproof curriculum(description)</Card.Subtitle>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text> */}

      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
    <div className="mb-1 ms-2 ">
      <Badge pill bg="transparent">
      <i class="bi bi-star"></i>
      <Card.Text className="d-inline mx-2">
      7
      </Card.Text>
      </Badge>{' '}
      <Badge pill bg="transparent">
      <i class="bi bi-git"></i>
      <Card.Text className="d-inline mx-2">
      200
      </Card.Text>
      </Badge>{' '}
      <Badge pill bg="transparent">
      <i class="bi bi-record-circle"></i>
      <Card.Text className="d-inline mx-2">
      1 (issue needs help)
      </Card.Text>
      </Badge>{' '}
      <Card.Text className="d-inline ms-5 text-muted">
        last updated (updated_app)
      </Card.Text>

    </div>
  </Card>
  )
}

export default RepoDisplay
