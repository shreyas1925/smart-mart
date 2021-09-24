import React from "react";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "react-bootstrap";
import "./Login.css";
const ShippingScreen = () => {
  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setCountry] = useState("");

  return (
    <FormContainer>
      <h1>Heyy Shipping Screens!!</h1>
    </FormContainer>
  );
};

export default ShippingScreen;
