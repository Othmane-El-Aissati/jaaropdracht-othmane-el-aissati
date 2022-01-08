import * as React from 'react'
import { Link } from 'gatsby'
import { container, nav, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout