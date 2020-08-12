import React, {
  useEffect,
  useState,
} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'


function Header() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
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
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/articles'>Articles</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;