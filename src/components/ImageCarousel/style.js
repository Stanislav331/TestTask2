import styled from "styled-components";

export const MainWrapper = styled.div`
    position: relative;
    max-width: 400px;
    margin: 20px auto;
`;

export const ProductImage = styled.img`
    max-width: 100%;
    max-height: 300px;
    height:auto;
    display: block;
`;

export const ArrowsWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: -35px;
    right: -35px;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
`;

export const ArrowButton = styled.button`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 0;
    background: #ebebeb;
    &:hover{
        background: #d7d7d7;
        transition: 0.2s;
    }
`;