import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import storage from "../../../firebase/firebase.storage.config";
import "./style.css";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AddNewDoctor = () => {
  const notify = () => toast.success("Submitted Successfully ");
  const { registerUser, SetUser, auth, updateProfile } = useAuth();
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [presUrl, setPresUrl] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const saveUser = (email, displayName, role) => {
    const user = { email, displayName, role };
    axios.post("https://project-101-doctor.herokuapp.com/users/", user);
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);
  const handleUpload = () => {
    const storageRef = ref(storage, `/files/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPresUrl(url);
        });
      }
    );
  };
  const sendDataToServer = (data) => {
    axios.post("https://project-101-doctor.herokuapp.com/doctorlist", data);
    console.log(data);
  };
  const onSubmit = (data) => {
    data.img = presUrl;
    registerUser(data.name, data.Mail, data.pass)
      .then((userCredential) => {
        const updatedUser = { email: data.Mail, displayName: data.name };
        SetUser(updatedUser);
        updateProfile(auth.currentUser, {
          displayName: data.name,
        }).then(() => {
          saveUser(data.Mail, data.name, "doctor");
          navigate(location.state?.from || "/login");
        });
      })
      .catch((error) => {});
    data.pass = "";
    sendDataToServer(data);
    notify();
  };
  return (
    <Container style={{ marginTop: "70px" }}>
      <ToastContainer />
      <Row>
        <Col>
          <img className="mt-5 slide-in-top" src="./addoc.svg" alt="" />
        </Col>
        <Col>
          <div className="add-service">
            <h2 className="text-center">
              <span>Doctor Registration</span>
            </h2>
            <p className="">
              <Link to="/login">Already Registerd ? Login here</Link>
            </p>
            <form
              className="from-container-xxo slide-in-elliptic-top-fwd"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Doctor Name"
                {...register("name", {})}
              />
              <input
                type="password"
                placeholder="Enter Password"
                {...register("pass", {})}
              />

              <input
                type="email"
                placeholder="Mail"
                {...register("Mail", {})}
              />
              <input
                type="text"
                placeholder="Degree"
                {...register("degree", {})}
              />
              <input
                type="text"
                placeholder="Speciality"
                {...register("speciality", {})}
              />
              <input
                type="text"
                placeholder="Chember"
                {...register("chember", {})}
              />
              <select {...register("department")}>
                <option value="Chest">Chest</option>
                <option value="Medicine">Medicine</option>
                <option value="Eye">Dermatology</option>
                <option value="Eye">Psychaiatry</option>
                <option value="Eye">General Physician</option>
                <option value="Eye">Diabetes</option>
                <option value="Eye">Neuromedicine</option>
                <option value="Eye">Gynaecology</option>
                <option value="Eye">Nutritionest</option>
                <option value="Eye">Eye</option>
              </select>
              <input type="text" placeholder="Time" {...register("time", {})} />
              <input type="number" placeholder="Fee" {...register("fee", {})} />
              <input
                type="number"
                placeholder="Experience"
                {...register("experience", {})}
              />
              <input
                type="text"
                placeholder="BMDC Registration Number"
                {...register("bmdc", {})}
              />
              <br />
              <p>Upload Doctor Image</p>
              <br />
              <div className="d-flex mt-3">
                <input
                  type="file"
                  onChangeCapture={handleChange}
                  placeholder="Prescription"
                />
                <Button variant="outline-primary" onClick={handleUpload}>
                  Upload
                </Button>
              </div>
              <div className="d-flex">
                <span>{progress === 0 ? "" : progress}</span>
                <span>{progress === 0 ? "" : "% upload complete"}</span>
              </div>
              <Button
                className=" p-3 roll-in-left"
                variant="primary"
                type="Submit"
              >
                Register
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewDoctor;
