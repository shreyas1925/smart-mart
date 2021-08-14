import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../images/login.png";
const FormComponent = ({ children }) => {
  return (
    <Container className="">
      <Row className=" justify-content-md-center ">
        <Col xs={12} md={6}>
          {children}
        </Col>
        <Col xs={12} md={6}>
          <img src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
