import React from "react";
import { Link } from "react-router-dom";
import "../custom.css";

function Home({ products, addToCart }) {
  return (
    <div>
      <h1>Welcome to Amazezon</h1>
      <hr></hr>
      <br></br>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              {/* <img
                src={product.avatar}
                className="card-img-top"
                alt={product.name}
              /> */}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <Link to={`/product/${product.id}`} className="btn btn-link">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
