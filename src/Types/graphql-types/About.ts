type About = {
  id: string,
  name: string,
  description: {
    childMarkdownRemark: {
      html: string,
      excerpt: string,
    },
  },
  image: {
    url: string,
    description: string,
    placeholderUrl: string,
  },
  cv: {
    url: string,
    title: string,
  }
}

export default About;