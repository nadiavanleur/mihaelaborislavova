import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/Layout'

class RootIndex extends React.Component {
  render() {
    const about = get(this, 'props.data.allContentfulAbout.nodes')
    console.log(about)

    return (
      <Layout location={this.props.location}>
        <div>Hellow World</div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulAbout {
      nodes {
        name
      }
    }
  }
`
