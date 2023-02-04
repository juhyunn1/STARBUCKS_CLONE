import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title';
import { useParams } from 'react-router-dom';
import ProductMain from './ProductMain';
// import { category } from '../../../db/category';

function Product() {
  const { productId } = useParams(); // 주소의 파라미터 사용
  const [product, setProduct] = useState(); // 상품 데이터
  const [categoryId, setCategoryId] = useState(); // 카테고리 아이디
  const [category, setCategory] = useState(); // 카테고리 데이터

  useEffect(() => {
    // 서버 실행 : json-server --port 3001 --watch ./src/data/data.json
    fetch(`http://localhost:3001/product/${productId}`) // 현재 페이지 상품 데이터 가져와서
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProduct(data); // product에 넣는다
      setCategoryId(data.category); // categoryId 설정
      // console.log(categoryId)
    })
    .catch(err => console.log(err))

    fetch(`http://localhost:3001/category/${categoryId}`) // 상품에 대한 카테고리 데이터 가져와서
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCategory(data); // category에 넣는다
    })
    .catch(err => console.log(err))

  }, [productId, categoryId]);

  console.log(categoryId)

  return (
    <div className='container'>
      {
        product && category && (
          <>
            <Title title={category.title} isView={true}/>
            <ProductMain product={product}/>
          </>
        )
      }
    </div>
  );
}

export default Product;