import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {imageCenter} from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <main>
    <Layout pageTitle="Welcome to the DnD showroom!">
      {/*<p style={{textAlign: "center"}}>Home page van de dnd showroom website</p>*/}
      <StaticImage
        alt="De home image"
        src="../images/homeImage.jpg"
        className={imageCenter}
      />
      </Layout>
      </main>
  )
}

export default IndexPage