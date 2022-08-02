import React from "react";
import Card from 'react-bootstrap/Card';


const People = () => {
  return (
    <Card className="my-3 bg-dark text-light text-start " border="secondary">
      <Card.Body>
        <Card.Title> People Section</Card.Title>
        <Card.Text>
          We could make a component which displays all connection and their
          thumbnails in here
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default People;
