import React from "react";
import { useParams, Link } from "react-router-dom";
import "../custom.css";

function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <div>
      <div className="card">
        {/* <img src={product.avatar} className="card-img-top" alt={product.name} /> */}
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to="/" className="btn btn-link">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
