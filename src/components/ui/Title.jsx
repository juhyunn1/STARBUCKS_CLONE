import React from 'react';
import style from "./Title.module.css"

function Title({title, isView}) { // 같은 형태의 section은 컴포넌트와 props 활용
  if(!isView) // isView가 false이면
    return null; // 렌더링 X
  
  return (
    <h2 className={style.pageTitle}>{title}</h2>
  );
}

export default Title;