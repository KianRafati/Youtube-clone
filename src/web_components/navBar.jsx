import React from "react";
import styled from "styled-components";
import MenuButtonComponent from './MenuButton.jsx';
import SearchBarComponent from "./SearchBar.jsx";
import CineProComponent from './CinePro.jsx'
import WatchListComponent from './WatchList.jsx'

import { NavBarHeight } from "../constants.js";

const NavBar = styled.nav`
    background-color: #333;
    color: aliceblue;
    padding: 5px;
    position: sticky;
    top: 0;
    height: ${NavBarHeight};
    z-index: 100;

    display: grid;
    grid-template-columns: repeat(auto-fill, 5vw);
    grid-auto-rows: ${NavBarHeight};
    gap: 2vw;
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(10px);
    border-bottom: #baba solid 0.5px;
`;

const NavBarImg = styled.img`
    width: 100%;
    border-radius: 10px;
    grid-column: 2;
    max-width: ${NavBarHeight};
`;


const NavBarComponent = ({ height }) => {
    return (
        <NavBar>
            <NavBarImg src="./favicon.ico" />
            <MenuButtonComponent height={height} />
            <SearchBarComponent height={height} />
            <CineProComponent height={height} />
            <WatchListComponent />
        </NavBar>
    )
}

export default NavBarComponent;
