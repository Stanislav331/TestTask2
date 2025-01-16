import styled from 'styled-components';

export const SelectWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const CircleSelectWrapper = styled.button`
    margin: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`;

export const Label = styled.p`
    font-size: 18px
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
`;

export const ImageWrapper = styled.div`
position: relative;
    svg{
        width: 100px;
        height: 100px;
        position: absolute;
        z-index: 2;
        top: 0;
        right: -100px;
        transform: rotate(210deg);
    }
`;

export const PriceLabel  = styled.div`
    position: absolute;
    z-index: 2;
    top: 38px;
    right: -85px;
    transform: rotate(-15deg);
    font-size: 18px;
    font-weight: 600;
`;

export const AddToCartWrapper  = styled.div`
    border-radius: 20px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    margin: 5px;
    svg{
        width: 40px;
        height: 40px;
        box-sizing: border-box;
    }
    &:hover{
        svg{
            padding: 2px;
            transition: 0.5s;
        }
    }
`;

export const ProductName  = styled.p`
    margin: 0;
    font-size: 28px;
    font-weight: 600;
`;


