import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Artist from "../components/artist"
import { StaticImage } from 'gatsby-plugin-image'
import {imageCenter, textStyle} from '../components/layout.module.css'

const IndexPage = ({data: {wpPage: { homePage },},}) => {
  return (
    <main>
    <Layout pageTitle="Welcome to the DnD showroom!">
      {/*<p style={{textAlign: "center"}}>Home page van de dnd showroom website</p>*/}
      <StaticImage
        alt="De home image"
        src="../images/homeImage.jpg"
        className={imageCenter}
      />
      <p className={textStyle}>This website is made to get some fun facts about DnD monsters. Hopefully you'll find some fun monsters and get some inspiration for future sessions.</p>
      </Layout>
    <div className={textStyle}>
      <h1>Featured monsters</h1>
      <p>Over here you can see some monsters we feature. These are not the only monsters we have for display but are definitely the most popular. <br></br>
      You can hover over the image to see the name and click on it to be directed to the monster page.</p>
      {homePage.featuredProducts.map(monster => (
           <Artist
              slug={`monsters/${monster.slug}`}
              key={monster.id}
              monster={monster}
            />
      ))}
    </div>
      </main>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      featuredProducts {
        ... on WpMonster {
          id
          monsterMeta {
            monsterName
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
          slug
        }
      }
      kleineBeschrijving
      title
    }
  }
}
`

export default IndexPage