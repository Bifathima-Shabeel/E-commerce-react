import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import React, { useState } from "react";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  return (
    <CartProvider>
      <Router>
        <Header setSearchQuery={setSearchQuery} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} /> 
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
