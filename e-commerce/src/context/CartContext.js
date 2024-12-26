import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext); // Hook to access cart data
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Function to update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent going below 1 quantity

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to get the total item count in the cart
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0); // Sum of quantities
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartItemCount // Provide the count to the rest of the app
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
