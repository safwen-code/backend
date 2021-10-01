/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ThingItems from "./ThingItems";

const ListThing = () => {
  const [Things, setThings] = useState([]);
  const [Loading, setLoading] = useState(false);
  const getThings = async () => {
    setLoading(true);
    try {
      const config = {
        Headers: { "Content-type": "application/json" },
      };
      const res = await axios.get("/thing/alldoc", config);
      console.log("la res de getAlldoc", res.data);

      setThings(...Things, res.data.thing);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getThings();
  }, []);

  return (
    <Container>
      <ThingItems Things={Things} Loading={Loading} getThings={getThings}/>
    </Container>
  );
};

export default ListThing;
