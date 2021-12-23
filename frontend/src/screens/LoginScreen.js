import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { login } from "../actions/userAction";
import FormComponent from "../Components/FormComponent";
// import { Avatar } from "@material-ui/core";
import "./Login.css";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin; //getting from reducers

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch the login here
    // shoot the login action here

    dispatch(login(email, password));
  };
  return (
    <FormComponent>
      {/* <h1 className="text-center">LOGIN HERE</h1> */}

      {/* <img src={Avatar} className="image" /> */}
      {/* <Avatar /> */}
      {error && <Message variant="danger">{error}</Message>}
      {/* {loading && <Loader></Loader>} */}
      <Form onSubmit={submitHandler} className="mt-5">
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* for password */}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          className="btn btn-info border-0 rounded-lg px-4 py-2 mb-3"
        >
          Sign in
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New user?
          <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
            Register
          </Link>
        </Col>
      </Row>
    </FormComponent>
  );
};

export default LoginScreen;
