import React, { useState, useEffect } from 'react';
import { ReactComponent as MenuIcon } from '../assets/burger-menu.svg';
import { styled } from 'styled-components';
import { websiteMainFont } from "../constants";


const MenuButtonComponent = ({ height }) => {

  const [buttonText, setButtonText] = useState('Menu');

  useEffect(() => {
    function updateButtonText() {
      if (window.innerWidth <= 800) {
        setButtonText('');
      } else {
        setButtonText(' Menu');
      }
    }

    updateButtonText();

    window.addEventListener('resize', updateButtonText);
    return () => {
      window.removeEventListener('resize', updateButtonText);
    };
  }, []);

  const iconStyles = {
    width: '24px',
    height: '24px',
  };

  const MenuButton = styled.button`
      width: 100%;
      height: ${height};
      font-size: 75%;
      font-family: ${websiteMainFont};
      grid-column: 3/span 3;

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
    <MenuButton id='MenuBtn'>
      <MenuIcon style={iconStyles} />
        {buttonText}
    </MenuButton>
  );
}

export default MenuButtonComponent;
