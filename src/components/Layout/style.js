import styled from 'styled-components';
import {Link} from "react-router-dom";

export const GoToListButton = styled(Link)`
    position: relative;
    overflow: hidden;
    font-size: 18px;
    padding: 12px 24px;
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

export const MainWrapper = styled.div``;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const Content = styled.main`
    padding: 20px;
`;

