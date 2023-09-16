import React from 'react'
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

  return (
    <>
      <Seo
        title={title}
        image={image}
        description={description}
        lang={lang}
      />
      <main data-browser={browserName.toLowerCase()}>{children}</main>
    </>
  )
}

export default Layout
