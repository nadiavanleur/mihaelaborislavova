import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react'
import * as style from './style.module.scss';

type Props = {
  image: IGatsbyImageData,
  alt: string,
  children?: React.ReactNode,
  header?: React.ReactNode,
  footer?: React.ReactNode,
}

const TextImage = ({ image, alt, header, children, footer }: Props) => {
  return (
    <div className={style.container}>
      {!!header && <header className={style.header}>{header}</header>}
      <div className={style.imageContainer}>
        <GatsbyImage image={image} alt={alt} className={style.image} />
      </div>
      <div className={style.text}>
        {children}
        {!!footer && (
          <footer className={style.footer}>
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}

export default TextImage;