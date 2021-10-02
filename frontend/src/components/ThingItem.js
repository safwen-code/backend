import React from "react";
import { Col, Image, Card, Button } from "react-bootstrap";

const ThingItem = ({
  thing: { titel, imageUrl, price, description, userId, _id },
  deleteThing,
}) => {
  const onhundlerDelete = (_id) => {
    deleteThing(_id);
    console.log("clicked to delete");
  };

  return (
    <Col sm>
      <Card style={{ width: "9rem" }}>
        <Image
          src={imageUrl}
          roundedCircle
          style={{ width: "6rem" }}
          className="m-auto"
        />
        <Card.Body>
          <Card.Title>{titel}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Button variant="outline-primary">Edite</Button>
          {}
          <Button
            variant="outline-secondary"
            onClick={() => {
              onhundlerDelete(_id);
            }}
          >
            delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ThingItem;
