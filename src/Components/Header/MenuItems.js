import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';



function MenuItems(props) {
  const {navActive} = props;
    return (
    <ul style={{
      height: navActive ? 'auto' : '0',
      opacity: navActive ? '1' : '0',
      zIndex: navActive ? 'auto' : '-999'
    }}>
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
    );
};

export default MenuItems;