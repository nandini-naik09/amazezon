import React from "react";
import { Link } from "react-router-dom";
import "../custom.css";

function Cart({ cart, incrementQuantity, decrementQuantity, removeItem }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-primary ms-2"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <Link to="/" className="btn btn-link">
              Continue Shopping
            </Link>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
