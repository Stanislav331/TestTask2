import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as CartIcon } from '../../accets/cart.svg';
import * as St from './style';

const CartButton = () => {
    const { cart } = useContext(CartContext);

    return (
        <St.GoToCartButton to="/cart">
            <CartIcon style={{ width: 30, height: 30 }} />
            <St.Counter style={{display: cart.length ? 'flex' : 'none'}}>{cart.length}</St.Counter>
        </St.GoToCartButton>
    );
};

export default CartButton;