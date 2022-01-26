import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import DocCard from "./DocCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Docx = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  const [srchData, setSrchData] = useState([]);
  const { register, handleSubmit } = useForm();
  const notify = () => toast.warn("No Result Found ");
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
  const onSubmit = (data) => {
    xrs();
  };
  const xrs = () => {
    setFIlteredData(filteredData.filter((mor) => mor.Name.toLowerCase().includes("karma")));
  };
  return (
    <Container className="mt-5">
      <ToastContainer />
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        Patient List
      </h2>
      {/* <InputGroup className="mb-3 slide-in-top">
        <form className="w-100 d-flex" onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            placeholder="Search Doctor"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            {...register("svalue", {})}
          />
          <Button type="Submit" variant="secondary" id="button-addon2">
            Search
          </Button>
        </form>
      </InputGroup> */}

      <Container className="obx">
        {filteredData.map((fdata) => (
          <DocCard key={fdata._id} data={fdata}></DocCard>
        ))}
      </Container>
    </Container>
  );
};

export default Docx;
