import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./ProductCard.scss";

const ProductList = ({ filteredProducts }) => {
  return (
    <>
      <Container className="product-list rounded-4 my-3 p-2">
        <Row className="g-1 justify-content-center">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
