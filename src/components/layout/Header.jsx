import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="../../images/logo/logo.png" alt="스타벅스 코리아" height={40}/>
      </Link>
      <nav>
        <ul>
          <li><Link to='menu'>MENU</Link></li>
          <li><Link to='cart'>CART</Link></li>
          <li><Link to='store'>STORE</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;