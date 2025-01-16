import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </Router>
        </CartProvider>
    );
};

export default App;
