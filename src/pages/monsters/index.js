import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const MonstersPage = ({data: {allWpMonster: {edges}}}) => {
  return (
    <Layout pageTitle="Monsters of the dnd showroom">
      <h2>Click on a monster to see the details.</h2>
      {edges.map((item) => {
        const monster = item.node.monsterMeta;
        const slug = item.node.slug;
        return <Link to={`/monsters/${slug}`} style={{textDecoration: "none", color: "inherit"}}>
          <p key={item.node.id}>{monster.monsterName}</p>
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
          }
          id
          slug
        }
      }
    }
  }

`

export default MonstersPage