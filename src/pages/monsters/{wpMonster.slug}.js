import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const MonsterPage = ({data: {wpMonster: {monsterMeta: monster}}}) => {
  const image = getImage(monster.image.localFile)
  return (
    <Layout pageTitle="Monsters Template">
      <div>
      <h3>{monster.monsterName}</h3>
      <GatsbyImage image={image} alt={monster.image.altText} />
      <h1>AC: {monster.armorClass} <br></br> <br></br> CR: {monster.challengeRating}</h1>
      <div dangerouslySetInnerHTML={{__html: monster.description}} />
      <p>Hitpoints: {monster.hitPoints}</p>
      <p>Alignment: {monster.alignment}</p>
      <p>Size: {monster.size}</p>
      <p>Environment: {monster.environment}</p>
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