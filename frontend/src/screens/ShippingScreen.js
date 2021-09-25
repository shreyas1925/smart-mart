import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../Components/FormComponent";
import "./Login.css";

const ShippingScreen = () => {
  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setCountry] = useState("");

  return (
    <FormComponent>
      <h1>Heyy Shipping Screens!!</h1>
    </FormComponent>
  );
};

export default ShippingScreen;
