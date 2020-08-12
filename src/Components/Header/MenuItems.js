import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';



function MenuItems(props) {
  const {navActive} = props;
  const styles = {
    default: {
      height: 'auto',
      opacity: '1',
      zIndex: 'auto',
    },
    responsive: {
      height: navActive ? 'auto' : '0',
      opacity: navActive ? '1' : '0',
      zIndex: navActive ? 'auto' : '-999'
    },
  };
  let style = null;
  if (typeof navActive === 'undefined') {
    style = styles.default;
  } else {
    style = styles.responsive;
  }
    return (
    <ul style={style}>
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