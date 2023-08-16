import React from "react";
import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from '../assets/search.svg';

const SearchBarComponent = ({height ,index}) => {
    let placeHoldertxt = 'Search'

    const SearchBarStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 5vw)',
        gap: '0',
        gridAutoRows: height,
    }
 
    const inputStyle = {
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
    
    const SearchBarDiv = styled.div`
        grid-column: ${index} / span 5;
    `

    return (
        <SearchBarDiv id="searchBar"  style={SearchBarStyle}>
            <input typeof="text" placeholder={placeHoldertxt} style={inputStyle}></input>
            <button style={btnStyle}>
                <SearchIcon style={iconStyle} />
            </button>
        </SearchBarDiv>
    )
}

export default SearchBarComponent