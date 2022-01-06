import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { register } from "../actions/userAction"; //it is the action
import FormComponent from "../Components/FormComponent";
import { getuserDetails } from "../actions/userAction";
import "./Login.css";

const UserEditScreen = ({ match, history }) => {
  const userID = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails; //getting from reducers

  useEffect(() => {
    if (!user.name || user._id !== userID) {
      dispatch(getuserDetails(userID));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, userID, user]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="pt-3">
        <Link to="/admin/userlist">Go Back</Link>
      </div>

      <FormComponent>
        <h1>Edit User {userID}</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler} className="">
            <Form.Group controlId="name">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
              ></Form.Check>
            </Form.Group>

            <Button
              type="submit"
              className="btn btn-info border-0 rounded-lg px-4 py-2 "
            >
              Update
            </Button>
          </Form>
        )}
      </FormComponent>
    </>
  );
};

export default UserEditScreen;
