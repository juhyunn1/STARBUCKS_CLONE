import React from 'react';
import { Link } from 'react-router-dom';
import products from "../../../data/products.json"
import Title from '../../ui/Title';
import style from "./Menu.module.css"

function Menu() {
  return (
    <div className='container'>
      <Title title="메뉴 페이지" isView={true}/>
      <ul className={style.productList}>
        {
          products.product.map( product => (
            <li key={product.id}>
              <Link to={`./${product.id}`}>
                <img src={product.image} alt={product.title}/>
                <div>{product.title}</div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Menu;