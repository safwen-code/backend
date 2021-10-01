import React from "react";
import { Spinner } from "react-bootstrap";
const Spinners = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" size="lg" />
      <Spinner animation="grow" />
    </div>
  );
};

export default Spinners;
