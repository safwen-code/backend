import { Container } from "react-bootstrap";
import "./App.css";
import AddThing from "./things/AddThing";
import DisplayThing from "./things/DisplayThing";
import EditeThing from "./things/EditeThing";
import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [Thing, setThing] = useState([]);
  const getThings = async () => {
    try {
      const thingDate = await axios.get("/thing/alldoc");
      setThing(...Thing, thingDate.data.thing);
      console.log(thingDate);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getThings();
  }, []);
  return (
    <Container>
      <AddThing  />
      <DisplayThing Thing={Thing} />
      <EditeThing />
    </Container>
  );
};

export default App;
