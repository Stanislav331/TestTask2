import React from 'react';
import CartButton from '../CartButton';
import * as St from './style';

const Layout = ({ children }) => {
    return (
        <St.MainWrapper>
            <St.Nav>
                <St.GoToListButton to="/">Список товаров</St.GoToListButton>
                <CartButton/>
            </St.Nav>
            <St.Content style={{ }}>
                {children}
            </St.Content>
        </St.MainWrapper>
    );
};

export default Layout;