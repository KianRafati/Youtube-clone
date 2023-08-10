import React from "react";
import { ReactComponent as Watchlist } from '../assets/watchlist.svg'
import { styled } from "styled-components";
import { websiteMainFont } from "../constants";

const WatchListComponent = () => {

    const WatchlistStyle = {
        paddingLeft: '25%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2vw 5vw',
        gridAutoRows: '5vh',
    }

    const WatchlistIconStyle = {
        padding: '10%',
        width: '100%',
        height: '100%',
        gridColumn: '1',
        gridColumn: '10px',
    }

    const WatchlistLblStyle = {
        padding: '10%',
        width: '100%',
        height: '100%',
        gridColumn: '2',
    }

    const WatchlistBtn = styled.button`
        width: 100%;
        font-size: 70%;
        grid-column: 13/span 2;
        font-family: ${websiteMainFont};

        border-radius: 10px;
        background-color: transparent ;
        color: aliceblue;
        border: transparent;

        &:hover {
            background-color: #4f4f4f;
            color: white;
            border: 1px solid white;
        }
    `

    return (
        <WatchlistBtn id="WatchlistBtn" style={WatchlistStyle}>
            <Watchlist style={WatchlistIconStyle} />
            <label style={WatchlistLblStyle}>
                Watchlist
            </label>
        </WatchlistBtn>
    )
}

export default WatchListComponent