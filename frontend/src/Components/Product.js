import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="rounded" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews}reviews`}
            // color="#f8e825"
          />
        </Card.Text>

        <Card.Text as="h3" className="mt-1">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </>
  );
};

export default Product;
