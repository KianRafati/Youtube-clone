import React from "react";
import MenuButtonComponent from './MenuButtonComponent.jsx';
import SearchBarComponent from "./SearchBar.jsx";

const NavBarComponent = () => {
    let SvgPath = 'Search'

    return (
        <nav className="navBar">
            <img src="./favicon.ico" />
            <MenuButtonComponent />
            <SearchBarComponent />
        </nav>
    )
}

export default NavBarComponent