import React from "react";
import { ReactComponent as Watchlist } from './assets/watchlist.svg'

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

    return (
        <button id="WatchlistBtn" style={WatchlistStyle}>
            <Watchlist style={WatchlistIconStyle} />
            <label style={WatchlistLblStyle}>
                Watchlist
            </label>
        </button>
    )
}

export default WatchListComponent