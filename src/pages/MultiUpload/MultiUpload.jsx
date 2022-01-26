import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import storage from "../../firebase/firebase.storage.config";
import MUC from "./MUC";

const MultiUpload = () => {
  const notify = () => toast.success("Submitted Successfully ");
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [presUrls, setPresUrls] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const handleUpload = () => {
    const promises = [];
    images.forEach((image) => {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
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
        getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
          setPresUrls(ps => [...ps,urls]);
        });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("All Upload Completed"))
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
  
  };
  console.log(user.email);
  return (
    <Container style={{ marginTop: "70px" }}>
      <ToastContainer />
      <h2 className="text-center">
        <span>Prescription Gallery</span>
      </h2>
      <div className="">
        <form
          className="slide-in-elliptic-top-fwd"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p>Upload Your Medical Data</p>
          <div className="mt-3">
            <input
              className="w-100"
              type="file"
              multiple
              onChangeCapture={handleChange}
              placeholder="Prescription"
            />
          </div>
          <div className="d-flex">
            <span>{progress === 0 ? "" : progress}</span>
            <span>{progress === 0 ? "" : "% upload complete"}</span>
          </div>
          <br />
          <Button
            className=" p-3 roll-in-left"
            variant="primary"
            type="Submit"
            onClick={handleUpload}
          >
            Upload Prescription
          </Button>
        </form>
      </div>
      <Container className=" gc-x mt-5 border border-primary">
         
            {
                presUrls.map(url => <MUC url={url}></MUC>)
            }
      </Container>
    </Container>
  );
};

export default MultiUpload;
