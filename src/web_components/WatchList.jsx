import React, { useState, useEffect } from 'react';
import { ReactComponent as Watchlist } from '../assets/watchlist.svg'
import { styled } from "styled-components";
import { websiteMainFont } from "../constants";

const WatchListComponent = ({ height, index }) => {

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
    gridColumn: '2',
    // border: '#000 solid',
  }

  const WatchlistLblStyle = {
    height: '100%',
    gridColumn: '3',
    // border: '#000 solid',
  }

  const WatchlistBtn = styled.button`
    width: 100%;
    height: ${height};
    font-size: 18px;
    grid-column: ${index}/span 2;
    font-family: ${websiteMainFont};
    border-radius: 10px;
    background-color: transparent ;
    color: aliceblue;
    border: transparent;
    text-align: left;
    
    display: grid;
    grid-template-columns: repeat(3, auto);

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