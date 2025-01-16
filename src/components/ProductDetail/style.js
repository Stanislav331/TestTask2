import styled from 'styled-components';
import {Link} from "react-router-dom";

export const MainWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ItemWrapper = styled(Link)`
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    width: 250px;
    text-decoration: none;
    border-radius: 20px;
    &:hover {
        border: 1px solid #007bff;
    }
`;

export const ItemImage = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 200px;
`;

export const ItemName = styled.h3`
    color: #333
`;

