import React from "react";
import MenuButtonComponent from './MenuButton.jsx';
import SearchBarComponent from "./SearchBar.jsx";
import CineProComponent from "./CinePro.jsx";
import WatchListComponent from "./WatchList.jsx";

const NavBarComponent = () => {
    

    return (
        <nav className="navBar">
            <img src="./favicon.ico" />
            <MenuButtonComponent />
            <SearchBarComponent />
            <CineProComponent />
            <WatchListComponent />
        </nav>
    )
}

export default NavBarComponent