import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const MonstersPage = ({data: {allWpMonster: {edges}}}) => {
  return (
    <Layout pageTitle="Monsters of the dnd showroom">
      {edges.map((item) => {
        const monster = item.node.monsterMeta;
        return <p key={item.node.monsterName}>{monster.monsterName} {monster.hitPoints} {monster.alignment}</p>
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
        }
      }
    }
  }

`

export default MonstersPage