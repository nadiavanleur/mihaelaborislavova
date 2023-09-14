import React from 'react';
import * as style from './style.module.scss';

type Props = {
  html: string;
}

const MarkDownContent = ({ html }: Props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className={style.container} />
  );
}

export default MarkDownContent;