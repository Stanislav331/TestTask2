import styled from "styled-components";
import {Link} from "react-router-dom";


export const Counter = styled.p`
    width: 20px;
    height: 20px;
    background: red;
    position: absolute;
    top: -25px;
    right: -10px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const GoToCartButton = styled(Link)`
    padding: 20px;
    background-color: #f0f0f0;
    position: fixed;
    right: 10px;
    bottom: 10px;
    border-radius: 20px;
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover {
        background-color: #007bff;
        svg{
            path{
                fill: #fff;
                stroke: #fff;
            }
        }
    }
    }

    &:focus {
        outline: none;
    }
`;