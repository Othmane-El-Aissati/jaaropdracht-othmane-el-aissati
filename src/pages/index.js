import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Link to="/about">About page</Link>
      <h1>Welcome to DnD showroom!</h1>
    </main>
  )
}
export default IndexPage