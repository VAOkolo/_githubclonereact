import React from "react";
import { Badge, Card } from "react-bootstrap";

const TopLanguages = () => {
  return (
    <div>
      <p class="h7 mb-1 border-top text-light">Top Languages</p>
      <Badge pill bg="primary">
        Javascript
      </Badge>{" "}
      <Badge pill bg="secondary">
        CSS
      </Badge>{" "}
      <Badge pill bg="info">
        HTML
      </Badge>{" "}
    </div>
  );
};

export default TopLanguages;
