import React from "react";
import { ReactComponent as SearchIcon } from './assets/search.svg';

const SearchBarComponent = () => {
    let placeHoldertxt = 'Search'

    return (
        <input typeof="text" id="searchBar" placeholder={placeHoldertxt}></input>
    )
}

export default SearchBarComponent