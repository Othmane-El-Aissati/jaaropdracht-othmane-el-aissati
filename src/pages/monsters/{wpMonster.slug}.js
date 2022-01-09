import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {textStyle} from '../../components/layout.module.css'

const MonsterPage = ({data: {wpMonster: {monsterMeta: monster}}}) => {
  const image = getImage(monster.image.localFile)
  return (
    <Layout pageTitle={monster.monsterName}>
      <div className={textStyle}>
      <GatsbyImage image={image} alt={monster.image.altText} />
      <h1>HP: {monster.hitPoints} <br></br> <br></br> AC: {monster.armorClass} <br></br> <br></br> CR: {monster.challengeRating}</h1>
      <p>Size: {monster.size}</p>
      <p>Alignment: {monster.alignment}</p>
      <p>Environment: {monster.environment}</p>
      <br></br>
      <p>Description:</p>
      <div dangerouslySetInnerHTML={{__html: monster.description}} />
      <br></br>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpMonster(id: {eq: $id}) {
      monsterMeta {
        monsterName
        hitPoints
        alignment
        size
        environment
        challengeRating
        armorClass
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`

export default MonsterPage