import React, { Component } from "react";
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import { RiQuillPenFill } from 'react-icons/ri';


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
                toggleTheme(e.target.checked ? "light" : "dark")
              }
              checked={theme === "light"}
              className="tog-checkbox"
            />
            {theme === "light" ? (
              <div className="tog-text">
                <FiMoon />
              </div>
            ) : (
              <div className="tog-text">
                <FiSun />
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
           <img src={'../../wind-power.png'} alt="wind power" width={35} height={30}></img> {title}
          </Link>
          <div className="nav-container">
            <ul className="header-nav">
            </ul>
            <ul className="header-link">
              <li>
                <Link to='/about'>
                  <RiQuillPenFill />
                </Link>
              </li>
              <li><a href="https://github.com/nishanthd" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
              <li><a href="https://linkedin.com/in/nishanth-d/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
              <li><a href="https://stackoverflow.com/users/4067249/nishanthd" target="_blank" rel="noopener noreferrer"><FaStackOverflow /></a></li>
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
