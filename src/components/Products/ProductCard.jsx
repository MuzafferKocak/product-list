import React from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  const [fav, setFav] = useState(false);
  const faClick = () => {
    setFav(!fav);
  };

  return (
    <Card className="rounded-2 card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price} €</Card.Title>
        <MdFavorite
          size={30}
          onClick={faClick}
          style={fav ? { color: "red" } : { color: "black" }}
        />
      </Card.Header>
      <Card.Img variant="top" src={image} alt="" />
      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
