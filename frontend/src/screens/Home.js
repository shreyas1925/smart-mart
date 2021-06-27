import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../Components/Product";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //Basically it will be the response and then we have
      // to do res.json() to get the data but here we are
      //using object destructuring
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="text-center pt-2">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
