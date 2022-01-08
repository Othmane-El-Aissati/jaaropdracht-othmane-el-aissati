import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
    <Layout pageTitle="Welcome to the DnD showroom!">
      <p>Home page van de dnd showroom website</p>
      <StaticImage
        alt="Een Gatsby astronaut"
        src="../images/gatsby-astronaut.png"
      />
      </Layout>
      </main>
  )
}
export default IndexPage