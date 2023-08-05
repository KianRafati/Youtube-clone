import React, { useState, useEffect } from 'react';
import { ReactComponent as MenuIcon } from './burger-menu.svg';

function MenuButtonComponent() {
  const [buttonText, setButtonText] = useState('Menu');

  useEffect(() => {
    function updateButtonText() {
      if (window.innerWidth <= 700) {
        setButtonText('');
      } else {
        setButtonText('Menu');
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

  return (
    <button>
      <MenuIcon style={iconStyles} />
      {buttonText}
    </button>
  );
}

export default MenuButtonComponent;
