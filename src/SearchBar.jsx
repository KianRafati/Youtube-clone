import React from "react";
import { ReactComponent as SearchIcon } from './assets/search.svg';

const SearchBarComponent = () => {
    let placeHoldertxt = 'Search'

    const SearchBarStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 5vw)',
        gap: '0',
        gridAutoRows: '5vh',
    }
 
    const inputStyle = {
        display: 'grid',
        gridAutoRows: '5vh',
        gridColumn: '1/span 5',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    }
    
    const btnStyle = {
        borderRadius: '0',
        backgroundColor: '#fff',
        gridColumn: '6/span 1',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
    }
    
    const iconStyle = {
        width: '100%',
        height: '100%',
    }

    return (
        <div id="searchBar"  style={SearchBarStyle}>
            <input typeof="text" placeholder={placeHoldertxt} style={inputStyle}></input>
            <button style={btnStyle}>
                <SearchIcon style={iconStyle} />
            </button>
        </div>
    )
}

export default SearchBarComponent