import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/Layout'
import About from '../Types/graphql-types/About'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

class RootIndex extends React.Component {
  render() {
    const about = get(this, 'props.data.contentfulAbout') as About

    return (
      <Layout
        title={about.name}
        description={about.description.childMarkdownRemark.excerpt}
        image={about.image.url}
      >
        <div>{about.name}</div>
        <div dangerouslySetInnerHTML={{ __html: about.description.childMarkdownRemark.html }} />
        <GatsbyImage image={getImage(about.image)!} alt={about.image.description} />
      </Layout>
    )
  }
}

export default RootIndex

// @TODO change max image width
export const pageQuery = graphql`
  query HomeQuery {
    contentfulAbout {
      id
      name
      description {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN, pruneLength: 158)
        }
      }
      image {
        url
        description
        placeholderUrl
        gatsbyImageData(width: 100, placeholder: BLURRED, formats: JPG)
      }
    }
  }
`
