import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/api';
import * as St from './style';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <St.MainWrapper>
            {products.map((product) => (
                <St.ItemWrapper key={product.id} to={`/product/${product.id}`}>
                    {product.colors && product.colors[0] && (
                        <St.ItemImage src={product.colors[0].images[0]} alt={product.name}/>
                    )}
                    <St.ItemName>{product.name}</St.ItemName>
                </St.ItemWrapper>
            ))}
        </St.MainWrapper>
    );
};

export default ProductList;