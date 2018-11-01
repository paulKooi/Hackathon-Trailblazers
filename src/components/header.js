import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
      <Link to="/">
        <h1>Rally Beta Team</h1>
      </Link>
      <Link to="/features">Feature Tour</Link>
      <Link to="/support">Support</Link>
      <Link to="/feedback">feedback</Link>
      <Link to="/updates">Updates</Link>
      <Link to="/signIn">
        <btn>Sign In</btn>
      </Link>
    </div>
  </div>
)

export default Header
