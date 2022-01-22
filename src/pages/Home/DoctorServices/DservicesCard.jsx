import React from "react";
import { Card, Button } from "react-bootstrap";

const DservicesCard = (props) => {
  const { _id, img, name, degree, speciality, chember} = props.doctor;
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {degree}
        </Card.Text>
        <Card.Text>
          {speciality}
        </Card.Text>
        <Card.Text>
          {chember}
        </Card.Text>
        <Button variant="primary">Get Appoinment</Button>
      </Card.Body>
    </Card>
  );
};

export default DservicesCard;
