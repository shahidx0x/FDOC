import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MUC = (props) => {
  const notify = () => toast.success("Deleted Successfully ");
  const handleDelete = (id) => {
    console.log(id);
    const isDelete = window.confirm(
      "Are you sure , you want to delete ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/pres-img/${id}`, {
        method: "DELETE",
      });
      notify();
    }
  };
  return (
    // <Container>
    //   <ToastContainer />
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={props.data.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button onClick={()=>{handleDelete(props.data._id)}} variant="outline-danger">Delete</Button>
        </Card.Body>
      </Card>
    // </Container>
  );
};

export default MUC;
