import * as React from 'react'
import Layout from '../components/layout'
import {textStyle} from '../components/layout.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <p className={textStyle}>Dnd Showroom is a website that displays Dnd monsters with information like pictures, description and stats.
        This website pulls data from a headless wordpress as backend and API with graphql.
      </p>
    </Layout>
  )
}

export default AboutPage