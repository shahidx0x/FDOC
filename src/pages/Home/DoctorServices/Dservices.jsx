import React from "react";
import { Container } from "react-bootstrap";
import useDoctorlist from "../../../hooks/useDoctorlist";
import DservicesCard from "./DservicesCard";
import  './style.css';
import './animation.css';

const Dservices = () => {
  const [doctorlists] = useDoctorlist();
  return (
    <Container>
      <p className="text-center" style={{ color: "orange", fontSize: "30px" }}>
        See Our Specialist Doctors
      </p>
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        Get Appoinment from our Top Doctor
      </h2>
      <div className="grid-container text-center mt-5 slide-in-bck-cente">
        {doctorlists.slice(0, 3).map((doctor) => (
          <DservicesCard key={doctor._id} doctor={doctor}></DservicesCard>
        ))}
      </div>
    </Container>
  );
};

export default Dservices;
