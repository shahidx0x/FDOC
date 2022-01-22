import React, { } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./style.css";
import "./animation.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

initializeAuthentication();
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.put("https://project-101-doctor.herokuapp.com/users", user);
  };
  const onSubmit = (data) => {
    login(data.mail, data.pass).then((res) => {
      localStorage.setItem("isAuth", "true");
      history.push(location.state?.from || "/home");
    });
    history.push(location.state?.from || "/home");
  };

  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName);
        localStorage.setItem("isAuth", "true");
        history.push(location.state?.from || "/home");
      })
      .catch((error) => {});
      
  };

  return (
    <div className="bgr">
      <Container>
        <Row>
          <h2
            className="text-center bounce-in-top"
            style={{ marginTop: "6rem" }}
          >
            Please Login
          </h2>
          <Col xs={12} lg={6} className="mt-5">
            <img
              className="p-5 slide-in-top"
              src="./login.svg"
              alt="registration_picture"
              width="100%"
            />
          </Col>
          <Col lg={6} className="mt-5 slide-in-elliptic-top-fwd">
            <form
              className="from-container mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="">
                <Link to="/registration">Didnt Register ? Register here</Link>
              </p>
              <input
                type="email"
                placeholder="Enter Your mail"
                {...register("mail", {})}
              />
              <input
                type="password"
                placeholder="Enter Password"
                {...register("pass", {})}
              />

              {/* <input className="btnx" type="Submit" /> */}
              {/* <Button type="Submit">Register</Button> */}
              <Button
                className="roll-in-left btnx"
                type="Submit"
                variant="outline-primary"
              >
                Login
              </Button>
              <Button
                className="roll-in-left btnx"
                onClick={handleGoogle}
                variant="outline-success"
              >
                Login with Google
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
