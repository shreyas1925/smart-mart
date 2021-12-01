import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../Components/FormComponent";
import "./Login.css";
import "../styles/styles.css";
import { saveShippingAddress } from "../actions/cartAction";
import CheckoutSteps from "../Components/CheckoutSteps";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setcity] = useState(shippingAddress.city);
  const [postalCode, setpostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  // using actions is like fetching all the data their and pushing them into the state for these like work actions come into the picture

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <FormComponent>
      <CheckoutSteps step1 step2 />
      <h1>Welcome User 😊!!</h1>
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

        <Button
          type="submit"
          className="btn btn-info border-0 rounded-lg px-4 py-2 mb-3"
        >
          Proceed
        </Button>
      </Form>
    </FormComponent>
  );
};
export default ShippingScreen;
