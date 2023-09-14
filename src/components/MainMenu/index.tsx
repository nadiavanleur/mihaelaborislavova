import React from 'react';
import MenuItem from './item';
import MainMenuItem from '../../Types/graphql-types/MainMenuItem';
import * as style from './style.module.scss';

type Props = {
  items: MainMenuItem[];
}

const MainMenu = ({ items }: Props) => {
  return (
    <nav>
      <ul className={style.menu}>
        {items.map((item, index) => (
          <li key={index}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;