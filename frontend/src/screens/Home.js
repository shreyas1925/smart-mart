import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../Components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction"; //we will be dispatching this
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList); //the peice of state i have mentioned in my store
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center pt-2">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
