import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Mid = () => {
  return (
    <Container>
      <Zoom top cascade>
        <h2
          className="text-center mt-5 text-white"
          style={{ fontSize: "50px" }}
        ></h2>
      </Zoom>
      <Bounce top cascade>
        <img className="rounded" src="./3.png" alt="" width="98%" />
      </Bounce>

      <Row>
        <Col className="mt-5">
          <Slide left>
            <img src="./mcc.svg" alt="" width="100%" />
          </Slide>
        </Col>
        <Col className=" mt-5">
          <Slide right>
            <h2 className="fw-bolder text-center">Medical Support</h2>
            <p className="mt-3 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
              esse numquam odio sunt nam aliquam explicabo rem cumque. Molestiae
              adipisci nemo sapiente impedit dignissimos, repellendus id tenetur
              sequi incidunt!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque hic esse numquam odio sunt nam aliquam explicabo rem
              cumque. Molestiae adipisci nemo sapiente impedit dignissimos,
              repellendus id tenetur sequi incidunt!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque hic esse numquam odio sunt nam
              aliquam explicabo rem cumque. Molestiae adipisci nemo sapiente
              impedit dignissimos, repellendus id tenetur sequi incidunt!
            </p>
          </Slide>

          <Link to="/doctors">
            <Button variant="outline-secondary">Chest</Button>
            <Button className="ms-3" variant="outline-success">
              Medicine
            </Button>
            <Button className="ms-3" variant="outline-primary">
              Eye
            </Button>
            <Button className="ms-3" variant="outline-danger">
              Psycology
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Slide top>
            <h2 className="fw-bolder text-center">Medical Research</h2>
            <p className="mt-3 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
              esse numquam odio sunt nam aliquam explicabo rem cumque. Molestiae
              adipisci nemo sapiente impedit dignissimos, repellendus id tenetur
              sequi incidunt!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque hic esse numquam odio sunt nam aliquam explicabo rem
              cumque. Molestiae adipisci nemo sapiente impedit dignissimos,
              repellendus id tenetur sequi incidunt!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque hic esse numquam odio sunt nam
              aliquam explicabo rem cumque. Molestiae adipisci nemo sapiente
              impedit dignissimos, repellendus id tenetur sequi incidunt!
            </p>
          </Slide>

          <Link to="/doctors">
            <Button variant="outline-secondary">Chest</Button>
            <Button className="ms-3" variant="outline-success">
              Medicine
            </Button>
            <Button className="ms-3" variant="outline-primary">
              Eye
            </Button>
            <Button className="ms-3" variant="outline-danger">
              Psycology
            </Button>
          </Link>
        </Col>
        <Col className=" mt-5">
          <Zoom top>
            <img src="./med-res.svg" alt="" width="100%" />
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
};

export default Mid;
