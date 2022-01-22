import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import DocCard from "./DocCard";

const Docx = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);

  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(
          morder.filter((mor) => mor.Doctor === user.displayName)
        );
      });
  }, [morder, user.displayName]);
  return (
    <Container className="mt-5">
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        Patient List
      </h2>
      <InputGroup className=" ms-3 mb-3">
        <FormControl
          placeholder="Search Patient"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button type="Submit" variant="outline-secondary" id="button-addon2">
          Search Patient
        </Button>
      </InputGroup>
      <Container className="obx">
        {filteredData.map((fdata) => (
          <DocCard key={fdata._id} data={fdata}></DocCard>
        ))}
      </Container>
    </Container>
  );
};

export default Docx;
