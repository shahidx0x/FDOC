import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import MyAppoinmentCard from "./MyAppoinmentCard";
import "./style.css"

const MyAppoinment = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.Email === user.email));
      });
  }, [morder, user.email]);
  return (
    <Container className="mt-5">
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        My Appoinment
      </h2>
      <Container className="obx">
        {filteredData.map((fdata) => (
          <MyAppoinmentCard key={fdata._id} data={fdata}></MyAppoinmentCard>
        ))}
      </Container>
    </Container>
  );
};

export default MyAppoinment;
