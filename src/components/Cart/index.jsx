import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as St from './style';
import { ReactComponent as EmptyCart } from '../../accets/emptyCart.svg';
import { ReactComponent as Trash } from '../../accets/trash.svg';
import { ReactComponent as ArrowRight } from '../../accets/arrowRight.svg';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <St.EmptyMessage>
            <EmptyCart style={{width: 200, height: 200}}/>
            <St.TrashEmptyTitle>Корзина пуста.</St.TrashEmptyTitle>
            <St.GoShopText>За покупками</St.GoShopText>
            <St.GoToListButton to="/"><ArrowRight style={{ width: 16, height: 16}} /></St.GoToListButton>
        </St.EmptyMessage>;
    }

    return (
            <St.CartWrapper>
                {cart.map((item, index) => (
                    <St.ItemWrapper key={index} >
                        <St.ImageItem src={item.images[0]} alt={item.name} style={{   }} />
                        <St.ItemName>{item.name}</St.ItemName>
                        <St.ItemCharacter>Цвет: {item.color}</St.ItemCharacter>
                        <St.ItemCharacter>Размер: {item.size}</St.ItemCharacter>
                        <St.ItemCharacter>Цена: ${item.price}</St.ItemCharacter>
                        <St.TrashButtonWrapper onClick={() => removeFromCart(item, item.color, item.size)}>
                            <Trash/>
                        </St.TrashButtonWrapper>
                    </St.ItemWrapper>
                ))}
            </St.CartWrapper>
    );
};

export default Cart;