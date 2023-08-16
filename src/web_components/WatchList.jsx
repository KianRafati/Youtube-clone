import React, { useState, useEffect } from 'react';
import { ReactComponent as Watchlist } from '../assets/watchlist.svg'
import { styled } from "styled-components";
import { websiteMainFont } from "../constants";

const WatchListComponent = ({ height }) => {

    const [buttonText, setButtonText] = useState('Watchlist');

    useEffect(() => {
      function updateButtonText() {
        if (window.innerWidth <= 800) {
          setButtonText('');
        } else {
          setButtonText('Watchlist');
        }
      }
  
      updateButtonText();
  
      window.addEventListener('resize', updateButtonText);
      return () => {
        window.removeEventListener('resize', updateButtonText);
      };
    }, []);

    const WatchlistIconStyle = {
        width: '100%',
        height: '100%',
        gridColumn: '1',
    }

    const WatchlistLblStyle = {
        width: '100%',
        height: '100%',
        padding: '0',
        gridColumn: '2',
    }

    const WatchlistBtn = styled.button`
        height: ${height};
        font-size: 70%;
        grid-column: 12/span 2;
        font-family: ${websiteMainFont};

        display: grid;
        grid-template-columns: auto auto;

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
        <WatchlistBtn id="WatchlistBtn">
            <Watchlist style={WatchlistIconStyle} />
            <label style={WatchlistLblStyle}>
                {buttonText}
            </label>
        </WatchlistBtn>
    )
}

export default WatchListComponent