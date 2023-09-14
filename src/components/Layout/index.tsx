import React from 'react'
import Seo from '../Seo'

type Props = {
  title: string,
  image?: string,
  description?: string,
  lang?: string,
  children?: React.ReactNode,
}

const Layout = ({ title, image, description, lang, children }: Props) => (
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

export default Layout
