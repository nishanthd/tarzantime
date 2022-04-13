import React, { Component } from "react";
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { WiMoonAltThirdQuarter, WiMoonAltFirstQuarter } from 'react-icons/wi';


class Layout extends Component {
  render() {
    const { title, children } = this.props
    const toggler = (
      <div className="toggler">
        <ThemeToggler>{({ theme, toggleTheme }) => (
          <label className="tog">
            <input
              type="checkbox"
              onChange={e =>
                toggleTheme(e.target.checked ? "dark" : "light")
              }
              checked={theme === "dark"}
              className="tog-checkbox"
            />
            {theme === "dark" ? (
              <div className="tog-text">
                <WiMoonAltFirstQuarter className="header-icon"  color={'white'} />
              </div>
            ) : (
              <div className="tog-text">
                <WiMoonAltThirdQuarter size={20} color={'black'} />
              </div>
            )}
          </label>
        )}</ThemeToggler>
      </div>
    )

    return (
      <div className="site-container">
        <div className="header-container">
          <Link
            className="header-title"
            to={`/`}
          >
            {title}
          </Link>
          <div className="nav-container">
            <ul className="header-nav">
            </ul>
            <ul className="header-link">
              <li><a href="https://github.com/nishanthd" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li>
                <Link to='/about'>
                  About
                </Link>
              </li>
              <li>|</li>
              <li>{toggler}</li>
            </ul>
          </div>
        </div>
        <main className='content-container'>{children}</main>
        <footer className="footer-copyright">
          © {new Date().getFullYear()} {title}, Built with
          {` `}
          <a className="footer-gatsby" href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
