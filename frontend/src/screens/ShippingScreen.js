import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../Components/FormComponent";
import "./Login.css";
import { saveShippingAddress } from "../actions/cartAction";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <FormComponent>
      <h1>Heyy Shipping Screens!!</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Address"
            // required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>city </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            required
            value={city}
            onChange={(e) => setcity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>postalCode </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your postalCode"
            required
            value={postalCode}
            onChange={(e) => setpostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className="btn btn-outline-info">
          Submit
        </Button>
      </Form>
    </FormComponent>
  );
};

export default ShippingScreen;
