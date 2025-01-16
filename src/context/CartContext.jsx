import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, color, size) => {
        const newItem = { ...product, color, size };
        const isItemExist = cart.some(item =>
            item.id === product.id && item.color === color && item.size === size
        );
        if (!isItemExist) {
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (product, color, size) => {
        const itemToRemove = { ...product, color, size };
        const updatedCart = cart.filter(item =>
            !(item.id === itemToRemove.id && item.color === itemToRemove.color && item.size === itemToRemove.size)
        );
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};