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
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../Components/FormComponent";
import CheckoutSteps from "../Components/CheckoutSteps";
import Message from "../Components/Message";
import Link from "react-router-dom";
function PlaceOrder() {
  const cart = useSelector((state) => state.cart);

  const PlaceOrderHandler = () => {
    console.log("s");
  };
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

          <ListGroup.Item>
            <h2>Ordered items</h2>
            {/* <strong>Method : </strong> */}
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <ListGroup variant="flush">
                {cart.cartItems.map((item, idx) => {
                  <ListGroup.Item key={idx}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>;
                })}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>

        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h2>Order summary</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>${cart.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col>${cart.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Row>
              <Col>Tax</Col>
              <Col>${cart.taxPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Total</Col>
              <Col>${cart.totalPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="submit"
              disabled={cart.cartItems === 0}
              onClick={PlaceOrderHandler}
              className="btn btn-info border-0 rounded-lg px-6 py-2  mb-3"
            >
              ORDER
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
}

export default PlaceOrder;
