import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; 

const CheckoutPage = () => {
  const { cartItems } = useCart(); 
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
  });

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert(`Order placed successfully for ${shippingInfo.name}!`);
  };

  return (
    <div className="container mt-5">
      <h1>Checkout</h1>

      {/* Cart Items Review */}
      <h3>Cart Items</h3>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            <div>
              <h5>{item.title}</h5>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.quantity * item.price}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-4">Shipping Information</h3>
      <form onSubmit={handlePlaceOrder}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={shippingInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <h3 className="mt-4">Order Summary</h3>
        <p>Total Price: ${getTotalPrice()}</p>

        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
