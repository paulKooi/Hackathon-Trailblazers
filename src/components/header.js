import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// const Header = ({ siteTitle }) => (
//   <div className="header">
//     <div className="headerGroup">
//       <Link to="/">
//         <h1>Rally Beta Team</h1>
//       </Link>
//       <Link to="/features">Feature Tour</Link>
//       <Link to="/support">Support</Link>
//       <Link to="/feedback">Feedback</Link>
//       <Link to="/updates">Updates</Link>
//       <Link to="/signIn">
//         <btn>Sign In</btn>
//       </Link>
//     </div>
//   </div>
// )

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 800) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}
      >
        <div
          className={
            this.state.hasScrolled
              ? 'headerGroup headerGroupScrolled'
              : 'headerGroup'
          }
        >
          <Link to="/features">Feature Tour</Link>
          <Link to="/support">Support</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/signIn">
            <btn>Sign Out</btn>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
