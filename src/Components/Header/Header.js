import React, {
  useEffect,
  useState,
} from 'react';

import MenuItems from './MenuItems';

import './Header.css'


function Header() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [navActive, setNavActive] = useState(false);
  useEffect(()=>{
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener('resize', handleResize);

    return _=>{
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <header>
      <div className='Logo'>
        Logo here
      </div>
      {dimensions.width >= 860 ? 
        <MenuItems/> 
        : 
        <div className='Dropdown'>
          <p onClick={()=>{
            setNavActive(!navActive)
          }}>wow button</p>
          <MenuItems navActive={navActive}/>
        </div>
        }
    </header>
  );
};

export default Header;