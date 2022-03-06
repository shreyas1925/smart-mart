import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
// import products from "../products";
import Product from "../Components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction"; //we will be dispatching this
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import "../styles/styles.css";
import Header from "../Components/Header";

import home__image from "./home__image.png";
import NavBar from "../Components/NavBar";
const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList); //the peice of state i have mentioned in my store
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home_div">
      {/* <h1 className="text-center pt-2">Latest Products</h1> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* <img src={tv} alt="" srcset="" className="img-fluid" /> */}

          {/* Main intro banner comes here */}

          <div className="home__intro">
            <NavBar />
            {/* <Header /> */}
            {/* <div className="home__image"> */}
            {/* <img src={home__image} alt="home" /> */}
            {/* </div> */}

            <div className="home__info font-weight-bolder">
              <h1 className="text-white">Smart Mart 🚀 People's choice</h1>
              <p>
                A initiative non profit project where users can contact us an
                add their art works or products which will be accessed by other
                users, payment gateways are included.
              </p>

              {/* <Button
                type="submit"
                className="btn btn-info border-0 rounded-lg px-6 py-2  mb-3"
              >
                CONNECT
              </Button> */}
              <div className="login">
                <Button className="button">Connect</Button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <Row className="pt-3">
              {/* products.slice(0, 4). */}
              {products.map((product) => (
                <Col key={product._id} sm={6} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
