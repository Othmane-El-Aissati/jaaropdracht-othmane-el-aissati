import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <title>About Us</title>
      <Link to="/">Back to Home</Link>
      <h1>About Us</h1>
      <p>Dnd Showroom is a website that displays Dnd monsters with information like pictures, description and stats.</p>
    </main>
  )
}

export default AboutPage