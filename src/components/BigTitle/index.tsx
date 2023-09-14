import React from 'react'
import * as style from './style.module.scss';

const BigTitle = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
}

export default BigTitle;