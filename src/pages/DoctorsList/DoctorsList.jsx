import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Stack,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import useDoctorlist from "../../hooks/useDoctorlist";
import ListCard from "./ListCard";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";


const DoctorsList = () => {
  const [doctorlists] = useDoctorlist();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);


  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/doctorlist")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
      });
  }, [morder]);
  const hc = () => {
    setFIlteredData(doctorlists);
  };
  const hcc = (xx) => {
    setFIlteredData(morder.filter((mor) => mor.department === xx));
  };
  return (
    <Container className="c-body">
      <p className="text-center" style={{ color: "orange", fontSize: "30px" }}>
        See Our Specialist Doctors
      </p>
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        Get Appoinment from our Top Doctor
      </h2>

      <Container className="">
        <InputGroup className="mb-3 slide-in-top">
          <FormControl
            placeholder="Search Doctor"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button type="Submit" variant="outline-secondary" id="button-addon2">
            Search Doctor
          </Button>
        </InputGroup>
        <Row className="">
          <Col
            lg={2}
            className="mt-5  hh"
            style={{ height: "200px", marginTop: "2rem" }}
          >
            <Stack gap={3} className="mt-4 slide-in-elliptic-top-fwd">
              <div className="">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hc();
                      }}
                      name="gilad"
                    />
                  }
                  label="All Department"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Chest");
                      }}
                      name="gilad"
                    />
                  }
                  label="Chest"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Medicine");
                      }}
                      name="gilad"
                    />
                  }
                  label="Medicine"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Dermatology");
                      }}
                      name="gilad"
                    />
                  }
                  label="Dermatology"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Psychiatry");
                      }}
                      name="gilad"
                    />
                  }
                  label="Psychaiatry"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("General Physician");
                      }}
                      name="gilad"
                    />
                  }
                  label="General Physician"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Diabetes");
                      }}
                      name="gilad"
                    />
                  }
                  label="Diabetes"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Neuromedicine");
                      }}
                      name="gilad"
                    />
                  }
                  label="Neuromedicine"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Gynaecology");
                      }}
                      name="gilad"
                    />
                  }
                  label="Gynaecology"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Nutritionest");
                      }}
                      name="gilad"
                    />
                  }
                  label="Nutritionest"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        hcc("Eye");
                      }}
                      name="gilad"
                    />
                  }
                  label="Eye"
                />
              </div>
            </Stack>
          </Col>
          <Col lg={10} className="o-c">
            {filteredData.length === 0 ? (
              <div className="gc-x  mt-5 ob">
                {doctorlists.map((doctor) => (
                  <ListCard key={doctor._id} doctor={doctor}></ListCard>
                ))}
              </div>
            ) : (
              <div className="gc-x  mt-5 ob">
                {filteredData.map((doctor) => (
                  <ListCard key={doctor._id} doctor={doctor}></ListCard>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default DoctorsList;
