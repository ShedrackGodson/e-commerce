import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";

function Product({ prod }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${prod._id}`}>
        <Card.Img src={prod.image} />
      </a>

      <Card.Body>
        <a href={`/product/${prod._id}`}>
          <Card.Title as="div">
            <strong>{prod.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            <Rating value={prod.rating} text={`${prod.numReviews} reviews`} color={"#f8e825"} />
          </div>
        </Card.Text>

        <Card.Text as="h3">${prod.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
