import React, { useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ThingContext from "../Context/ThingContext";
import Spinners from "../Layout/Spinners";
import ThingItem from "./ThingItem";

const ListThings = () => {
  const thingContext = useContext(ThingContext);
  const { things, Loading, GetAllThings, deleteThing } = thingContext;

  useEffect(() => {
    GetAllThings();
    return () => {
      console.log("unmonted");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("all thing ", things);
  return (
    <Container>
      <Row>
        {Loading && things.length < 0 ? (
          <Spinners />
        ) : (
          things.map((thing) => {
            return (
              <ThingItem
                thing={thing}
                key={thing._id}
                deleteThing={deleteThing}
              />
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default ListThings;
