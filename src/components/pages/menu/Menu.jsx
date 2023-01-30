import React from 'react';
import menus from "../../../data/menus.json"
import style from "./Menu.module.css"

function Menu() {
  return (
    <div className='container'>
      <h1>메뉴 페이지</h1>
      <ul className={style.menu}>
        {
          menus.menu.map( menu => (
            <li key={menu.id}>
              zzzz
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Menu;