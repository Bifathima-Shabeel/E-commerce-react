import React from 'react';
import { useCart } from '../context/CartContext';  // To use CartContext
import { Link } from 'react-router-dom'; // Import Link for navigation

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Access cart items and functions

  // If cart is empty, show a message
  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>; // Show message if cart is empty
  }

  // Function to handle the quantity change (both increment and decrement)
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) { // Prevent going below 1
      updateQuantity(itemId, newQuantity); // Update quantity
    }
  };

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>

      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Product Image */}
            <div className="cart-item-image" style={{ width: '60px', height: '60px', overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensure image fills the container without distortion
                }}
              />
            </div>

            {/* Product Info */}
            <div className="cart-item-details" style={{ flexGrow: 1, marginLeft: '10px' }}>
              <h5 className="cart-item-title" style={{ fontSize: '1rem', marginBottom: '5px' }}>
                {item.title}
              </h5>
              <p className="cart-item-description" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                {item.description}
              </p>
              <p className="cart-item-price" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                ${item.price}
              </p>
            </div>

            {/* Quantity management (Increase / Decrease / Remove) */}
            <div className="d-flex align-items-center">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)} // Increment quantity
                className="btn btn-light btn-sm mx-1"
              >
                +
              </button>
              <span className="mx-2">{item.quantity}</span> {/* Display current quantity */}
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)} // Decrement quantity
                className="btn btn-light btn-sm mx-1"
                disabled={item.quantity <= 1} // Disable decrease if quantity is 1
              >
                -
              </button>
              <button
                onClick={() => removeFromCart(item.id)} // Remove item from cart
                className="btn btn-light btn-sm mx-1"
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Proceed to checkout button */}
      <div className="mt-4">
        <Link to="/checkout" className="btn btn-success">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
