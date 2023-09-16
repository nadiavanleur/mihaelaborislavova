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

const LinkButton = ({ target, children, icon, iconOnly, ...props }: Props) => {
  const isExternal = !!props.to.startsWith('http');
  const LinkComponent = isExternal ? 'a' : Link;
  const attributes = isExternal ? {
    rel: 'noopener noreferrer',
    target: '_blank',
    href: props.to,
  } : {
    to: props.to,
  };

  return (
    <LinkComponent
      className={`${style.button} ${iconOnly ? style.buttonIconOnly : ''}`}
      target={target}
      {...attributes}
    >
      {!!icon && (
        <Icon icon={icon} size={24} />
      )}
      <span className={iconOnly ? 'visually-hidden' : undefined}>
        {children}
      </span>
    </LinkComponent>
  );
}

export default LinkButton;