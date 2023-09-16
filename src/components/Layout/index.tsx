import React, { useEffect, useState } from 'react'
import Seo from '../Seo'
import { browserName } from 'react-device-detect';

type Props = {
  title: string,
  image?: string,
  description?: string,
  lang?: string,
  children?: React.ReactNode,
}

const Layout = ({ title, image, description, lang, children }: Props) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dataBrowser = browserName.toLowerCase();
      document.body.setAttribute('data-browser', dataBrowser);
    }
  }, []);

  return (
    <>
      <Seo
        title={title}
        image={image}
        description={description}
        lang={lang}
      />
      <main>{children}</main>
    </>
  )
}

export default Layout
