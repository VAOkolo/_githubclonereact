import React from 'react'
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

const RepoDisplay = ({name, description, stargazers_count, forks_count, open_issues, updated_at, htmlUrl}) => {
  
  return (
    <Card  className='my-2 bg-black text-light text-start ' border="secondary" >
    <Card.Body >
    <Card.Link             target="_blank"
           rel="noreferrer" href={htmlUrl}>
           <Card.Title className='text-primary' >{name}</Card.Title>
    </Card.Link>
     
      <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
    </Card.Body>
    <div className="mb-1 ms-2 ">
      <Badge pill bg="transparent">
      <i class="bi bi-star"></i>
      <Card.Text className="d-inline mx-2 text-muted">
       {stargazers_count }
      </Card.Text>
      </Badge>{' '}
      <Badge pill bg="transparent">
      <i class="bi bi-git"></i>
      <Card.Text className="d-inline mx-2 text-muted">
     {forks_count}
      </Card.Text>
      </Badge>{' '}
      <Badge pill bg="transparent">
      <i class="bi bi-record-circle"></i>
      <Card.Text className="d-inline mx-2 text-muted">
      {open_issues}
      </Card.Text>
      </Badge>{' '}
      <Card.Text className="d-inline ms-5 text-muted">
        last updated {updated_at}
      </Card.Text>

    </div>
  </Card>
  )
}

export default RepoDisplay
