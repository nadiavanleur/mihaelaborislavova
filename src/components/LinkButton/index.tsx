import React from 'react';
import { Link } from 'gatsby'
import * as style from './style.module.scss';
import Icon, { IconType } from '../Icon';

type Props = {
  to: string;
  children: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  icon?: IconType;
  iconOnly?: boolean;
}

const LinkButton = ({ to, target, children, icon, iconOnly }: Props) => {
  return (
    <Link to={to} className={`${style.button} ${iconOnly ? style.buttonIconOnly : ''}`} target={target}>
      {!!icon && (
        <Icon icon={icon} size={24} className={style.icon} />
      )}
      <span className={iconOnly ? 'visually-hidden' : undefined}>
        {children}
      </span>
    </Link>
  );
}

export default LinkButton;