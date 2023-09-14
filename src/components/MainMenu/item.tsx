import React from 'react';
import LinkButton from '../LinkButton';
import MainMenuItem from '../../Types/graphql-types/MainMenuItem';

type Props = {
  item: MainMenuItem;
}

const MenuItem = ({ item }: Props) => {
  let url = item.url;
  if (!url || !item.useUrl) url = item.download.url;
  if (!url) return null;

  return (
    <LinkButton to={url} target='_blank' icon={item.icon} iconOnly={item.iconOnly}>{item.title}</LinkButton>
  );
}

export default MenuItem;