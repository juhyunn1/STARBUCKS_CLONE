import React from 'react';
import style from './ProductMain.module.css';

function ProductMain({product}) {
  return (
    <div className='container' style={{margin: 0}}>
      <h2 className={style.title}>
        {product.title}
        <p>{product.engTitle}</p>
      </h2>
      <p className={style.description}>{product.description}</p>
      <div className={style.addCartBtn}>ADD CART</div>
      <img src={product.image} alt={product.title} width="100%"/>
      {/* <div>{product.price}</div> */}
    </div>
  )
}

export default ProductMain;