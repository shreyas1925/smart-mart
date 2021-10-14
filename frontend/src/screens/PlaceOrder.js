import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../Components/FormComponent";
import CheckoutSteps from "../Components/CheckoutSteps";
import Message from "../Components/Message";

function PlaceOrder() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col>
          <ListGroup.Item>
            <h2 className="font-weight-bold">Shipping</h2>
            <p className="text-capitalize">
              <strong>Address : </strong>
              {cart.shippingAddress.address} , {cart.shippingAddress.city} ,
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <strong>Method : </strong>
            {cart.paymentMethod}
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
}

export default PlaceOrder;
