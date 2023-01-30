import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logo from "../../images/logo/logo.png";
import { useRecoilValue } from 'recoil';
import { CartCountState } from '../../state/cartCountState';

function Header() {
  const cartCount = useRecoilValue(CartCountState); // CartCount atom 상태값 읽어옴

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="스타벅스 코리아"/>
        <h1>스타벅스 코리아</h1>
      </Link>

      <nav className={style.headerMenu}>
        <ul>
          <li><Link to='menu'>MENU</Link></li>
          <li>
            <Link to='cart'>CART</Link>
            {
              cartCount === 0 ? "" : <div className={style.cartBadge}>{cartCount}</div> // 카트에 상품이 있다면 뱃지 표시
            }
          </li>
          <li><Link to='store'>STORE</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;  