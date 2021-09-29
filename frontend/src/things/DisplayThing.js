import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";

const DisplayThing = ({ Thing }) => {
  console.log("thing ", Thing);

  return (
    <Container>
      <Row>
        {Thing.map((thing) => {
          return (
            <Col xs={6} className="mt-3 mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={thing.imageUrl} />
                <Card.Body>
                  <Card.Title>{thing.titel}</Card.Title>
                  <Card.Text>{thing.description}</Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{thing.userId}</ListGroupItem>
                    <ListGroupItem>{thing.price}</ListGroupItem>
                  </ListGroup>
                  <Button variant="primary">edite </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}{" "}
      </Row>
    </Container>
  );
};

DisplayThing.propTypes = {
  Thing: PropTypes.array,
};
export default DisplayThing;
