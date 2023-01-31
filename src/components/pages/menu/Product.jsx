import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title';
import { useParams } from 'react-router-dom';
import ProductMain from './ProductMain';

function Product() {
  const { productId } = useParams(); // 주소의 파라미터 사용
  const [category, setCategory] = useState(); // 카테고리 데이터
  const [categoryId, setCategoryId] = useState(); // 카테고리 아이디
  const [product, setProduct] = useState(); // 상품 데이터

  useEffect(() => {
    fetch(`http://localhost:3001/product/${productId}`) // 현재 페이지 상품 데이터 가져와서, json-server --port 3001 --watch ./src/data/products.json
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProduct(data) // product에 넣는다
      setCategoryId(data.category) // categoryId 설정
      // console.log(categoryId)
    })
    .catch(err => console.log(err))

    // fetch(`http://localhost:3002/category/${categoryId}`)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   setCategory(data)
    // })
    // .catch(err => console.log(err))

  }, [productId]);

  console.log(categoryId)
  return (
    <div className='container'>
      <Title title="{category.title}" isView={true}/>
      {
        product && <ProductMain product={product}/>
        // <div>
        //   <img src={product.image} alt={product.title} width="100%"/>
        //   <div>{product.title}</div>
        //   <div>{product.engTitle}</div>
        //   <div>{product.price}</div>
        //   <div>{product.detail}</div>
        //   <button>ADD CART</button>
        // </div>
      }
    </div>
  );
}

export default Product;