import React from "react";
import Card from "react-bootstrap/Card";

import { Badge, Image } from "react-bootstrap/";

const People = ({followers}) => {
  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <Card className="my-3 bg-black text-light text-start " border="none">
      <Card.Body>
        <Card.Title> People </Card.Title>

      </Card.Body>
      <div>
        {followers.map((item) => (
          <Badge className="m-0 px-0" bg="transparent" border="transparent" variant="info" >
            <Image
              roundedCircle={true}
              src={`${item.avatar_url}`}
              style={{ height: "30px", width: "30px" }}
            />
          </Badge> 
        ))}
      </div>
    </Card>
  );
};

export default People;
