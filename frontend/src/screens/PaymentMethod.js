import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../Components/FormComponent";
import "./Login.css";
import "../styles/styles.css";
import { savePaymentMethod } from "../actions/cartAction"; //come from actions
import CheckoutSteps from "../Components/CheckoutSteps";

const PaymentMethod = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setpaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod)); //from action we will dispatch
    history.push("/placeorder");
  };
  return (
    <FormComponent>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method 💸!!</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or credit card"
              id="paypal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setpaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-info border-0 rounded-lg px-4 py-2 mt-2"
        >
          Proceed
        </Button>
      </Form>
    </FormComponent>
  );
};
export default PaymentMethod;
