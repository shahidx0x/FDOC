
import {  Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const ListCard = (props) => {
  const {
    _id,
    name,
    fee,
    degree,
    speciality,
    chember,
    department,
    time,
    img,
  } = props.doctor;



  return (
    //
    <Container className="">
      <Card style={{ marginBottom: "20px", marginTop: "20px", width: "50rem" }}>
        <Container>
          <Row>
            <Col>
              <img
                src={img}
                alt=""
                width="100%"
                height="300px"
                style={{ borderRadius: "50%" }}
              />
            </Col>
            <Col>
              <h2 className="mt-4">{name}</h2>
              <p className="text-danger">{degree}</p>
              <p className="fw-bold">{speciality}</p>
              <p className="fw-bold">{chember}</p>
              <p className="text-info fw-bold">{department}</p>
            </Col>
            <Col>
              <div className="mt-5 p-3 ms-4">
                <h5 className="mt-5 fw-bold" style={{fontSize:"18px"}}>Visit Fee : ${fee} Tk</h5>
                <p className="fw-bold">Visiting Hour : {time}</p>
               
                    <Link className="t-n" to={`/appoinment/${_id}`}>
                    <Button className="w-100" variant="outline-primary">
                      Get Appoinment
                    </Button>
                </Link>
         
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default ListCard;
