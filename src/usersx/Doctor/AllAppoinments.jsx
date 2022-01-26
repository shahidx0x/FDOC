import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import AP from "./AP";

const AllAppoinments = () => {
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
  }, [morder, filteredData, user.displayName]);
  return (
      <Container>
        {filteredData.map((fdata) => (
          <AP key={fdata._id} data={fdata}></AP>
        ))}
      </Container>
  );
};

export default AllAppoinments;
