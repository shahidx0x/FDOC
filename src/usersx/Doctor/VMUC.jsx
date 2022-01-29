import React from "react";
import {  Card } from "react-bootstrap";

const VMUC = (props) => {
  return (

    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src={props.data.img}  />
      <Card.Body>
      </Card.Body>
    </Card>
  );
};

export default VMUC;
