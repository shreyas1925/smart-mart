import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../images/login.png";

const FormComponent = ({ children }) => {
  return (
    <Container className="border-dark">
      <Row className=" justify-content-md-center ">
        <Col xs={12} md={6} className="mt-5">
          {children}
        </Col>
        {/* <Col xs={12} md={6}>
          <img src={image} alt="" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default FormComponent;
