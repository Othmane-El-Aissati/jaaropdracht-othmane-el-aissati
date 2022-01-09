import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
    <Layout pageTitle="Welcome to the DnD showroom!">
      <p>Home page van de dnd showroom website</p>
      <StaticImage
        alt="De home image"
        src="../images/homeImage.jpg"
      />
      </Layout>
      </main>
  )
}
export default IndexPage