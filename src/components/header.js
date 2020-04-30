import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/header.module.css"

import gitHub from "../../static/github.svg"
import li from "../../static/li.svg"
import email from "../../static/email.svg"

const activeStyle = { color: "#6193bc", borderBottom: "2px solid #6193bc" }

export default () => (
  <h6 className={headerStyles.header}>
    <div className={headerStyles.textContainer}>
      <div className={headerStyles.nameLinks}>
        <h6 className={headerStyles.name}>cassie spain</h6>
        <div className={headerStyles.links}>
          <Link className={headerStyles.link} activeStyle={activeStyle} to="/">
            about
          </Link>
          <Link
            className={headerStyles.link}
            activeStyle={activeStyle}
            to="/work/"
          >
            work
          </Link>
          <Link
            className={headerStyles.link}
            activeStyle={activeStyle}
            to="/contact/"
          >
            contact
          </Link>
        </div>
      </div>
      <div className={headerStyles.logos}>
        <a
          href="https://github.com/dreamwasp"
          target="_blank"
          className={headerStyles.logo}
        >
          <img src={gitHub} className={headerStyles.resize} />
        </a>
        <a
          href="https://www.linkedin.com/in/ceaspain/"
          target="_blank"
          className={headerStyles.logo}
        >
          <img src={li} className={headerStyles.resize} />
        </a>
        <a href="mailto:cea.spain@gmail.com" className={headerStyles.logo}>
          <img src={email} className={headerStyles.resize} />
        </a>
      </div>
    </div>
    <hr className={headerStyles.line}></hr>
  </h6>
)
