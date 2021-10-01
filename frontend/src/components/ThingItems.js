/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Spinners from "../Layout/Spinners";
import { Row, Col, Card, Button, Image } from "react-bootstrap";

import axios from "axios";
import { useHistory } from "react-router-dom";
const ThingItems = ({ Things, Loading }) => {
  const history = useHistory();
  const deleteThing = async (id) => {
    console.log("id ", id);
    try {
      const res = await axios.delete(`/thing/delete/${id}`);
      console.log("delete thing", res.data);
      history.push('/')
    } catch (error) {
      console.error(error.message);
    }
  };
  
  
  return (
    <Row className="border border-dark mt-3">
      <p className="font-weight-italic text-center text-md-left " size="lg">
        {" "}
        All Thing Showing
      </p>
      {Loading ? (
        <Spinners />
      ) : (
        Things.map((thing, index) => {
          return (
            <Col sm key={index}>
              <Card style={{ width: "18rem" }} className="mb-2">
                {/* <Card.Img variant="top" src={thing.imageUrl} /> */}
                <Image
                  className="mx-auto mt-1"
                  src={thing.imageUrl}
                  roundedCircle
                  style={{ width: "7rem", height: "7rem" }}
                />
                <Card.Body>
                  <Card.Title>{thing.titel}</Card.Title>
                  <Card.Text>{thing.description}</Card.Text>
                  <Button
                    variant="outline-danger"
                    onClick={() => history.push(`/editeThing/${thing._id}`)}
                  >
                    Edite
                  </Button>
                  {"   "}
                  <Button
                    variant="outline-warning"
                    onClick={(e) => deleteThing(thing._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      )}
    </Row>
  );
};

export default ThingItems;
