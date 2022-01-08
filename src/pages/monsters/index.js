import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const MonstersPage = ({data: {allWpMonster: {edges}}}) => {
  return (
    <Layout pageTitle="Monsters of the dnd showroom">
      {edges.map((item) => {
        const monster = item.node.monsterMeta;
        const slug = item.node.slug;
        return <Link to={`/monsters/${slug}`}>
          <p key={item.node.id}>{monster.monsterName} {monster.hitPoints} {monster.alignment}</p>
        </Link>
      })}
    </Layout>
  )
}

export const query = graphql`
query {
    allWpMonster {
      edges {
        node {
          monsterMeta {
            monsterName
            hitPoints
            alignment
          }
          id
          slug
        }
      }
    }
  }

`

export default MonstersPage