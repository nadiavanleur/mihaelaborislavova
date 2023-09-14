import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/Layout'
import About from '../Types/graphql-types/About'
import { getImage } from 'gatsby-plugin-image'
import TextImage from '../components/TextImage'
import * as style from './style.module.scss';
import BigTitle from '../components/BigTitle'
import MarkDownContent from '../components/MarkDownContent'
import MainMenu from '../components/MainMenu'
import MainMenuItem from '../Types/graphql-types/MainMenuItem'
import { AllIcons } from '../components/Icon'

class RootIndex extends React.Component {
  render() {
    const about = get(this, 'props.data.contentfulAbout') as About;
    const mainMenuItems = get(this, 'props.data.mainMenu.menuItems') as MainMenuItem[];

    return (
      <Layout
        title={about.name}
        description={about.description.childMarkdownRemark.excerpt}
        image={about.image.url}
      >
        <div className={style.container}>
          <BigTitle>{about.name}</BigTitle>
          <TextImage
            image={getImage(about.image)!}
            alt={about.image.description}
            footer={<MainMenu items={mainMenuItems} />}
          >
            <MarkDownContent html={about.description.childMarkdownRemark.html} />
          </TextImage>
        </div>
      </Layout >
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
        gatsbyImageData(width: 350, placeholder: BLURRED, formats: JPG)
      }
      cv {
        url
        title
      }
    }
    mainMenu: contentfulMenu(name: {eq: "main-menu"}) {
      menuItems {
        title
        icon
        iconOnly
        url
        download {
          url
        }
        useUrl
      }
    }
  }
`
