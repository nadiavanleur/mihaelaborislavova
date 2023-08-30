import React from 'react'

import '../variables.css'
import '../global.css'
import Seo from '../seo'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <main>{children}</main>
      </>
    )
  }
}

export default Template
