import styled from "styled-components";
import {Link} from "react-router-dom";

export const EmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const TrashButtonWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    background: red;
    padding: 8px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    svg{
        width: 20px;
        height: 20px;
        box-sizing: border-box;

    }
    &:hover{
        svg{
            padding: 2px;
            transition: 0.5s;
        }
    }
`;

export const ItemWrapper = styled.div`
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    width: 300px;
    position: relative;
    border-radius: 20px;
`;

export const TrashEmptyTitle = styled.p`
    font-size: 23px;
    font-weight: 600;
    margin: 0;
`;

export const GoShopText = styled.p`
    font-size: 18px;
`;

export const ImageItem = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 200px;
`;

export const ItemCharacter = styled.p`
`;

export const ItemName = styled.h3`
`;


export const GoToListButton = styled(Link)`
    position: relative;
    overflow: hidden;
    padding: 8px 18px;
    border: none;
    cursor: pointer;
    background-color: #f0f0f0;
    color: #333;
    text-decoration: none;
    transition: background-color 0.5s ease, color 0.5s ease;
    border-radius: 4px;

    &:hover {
        background-color: #007bff;
        color: #fff;
    }

    &:focus {
        outline: none;
    }
`;

export const CartWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
