import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import ReactImageZoom from 'react-image-zoom';

const AP = (props) => {
    console.log(props);
        const notify = () => toast.success("Appoinment Cancled ");
  const {
    _id,
    Doctor,
    Name,
    Email,
    apdate,
    aptime,
    detail,
    apstatus,
    url,
  } = props.data;
  const propx = {width: 400, height: 400, zoomWidth: 500, scale:1.5, img: url};
   const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to cancle appointment ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/users-info/${id}`, {
        method: "DELETE",
      });
      notify();
    }
  };
  return (
    <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ToastContainer />
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col lg={4}>
                {/* <img src={url} alt="" /> */}
                <ReactImageZoom {...propx} />
              </Col>
              <Col lg={6}>
                <h3>Appointed Doctor : {Doctor}</h3>
                <p>Appoinment Status : {apstatus} </p>

                <div className="mt-5">
                  <h5>Patient Name : {Name}</h5>
                  <p className="fw-bold">Patient Contact : {Email}</p>
                  <p className="fw-bold">Appointed Date : {apdate}</p>
                  <p className="fw-bold">Appointed Time : {aptime}</p>
                </div>
                <p className="text-center fw-bold">Problem Details</p>
                <Card.Text>{detail}</Card.Text>
                <Button
                  onClick={() => handleDelete(_id)}
                  variant="outline-danger"
                >
                  Cancle Appoinment
                </Button>
              </Col>
              <Col lg={2}></Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AP;