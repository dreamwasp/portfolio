import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.css"
import gitHub from "../../static/GitHub-Mark-Light-32px.png"
import li from "../../static/li.png"

export default ({ children }) => (
  <div style={{ margin: 0 }}>
    <h6 className={headerStyles.header}>
      <div className={headerStyles.textContainer}>
        <div className={headerStyles.nameLinks}>
          <h6 className={headerStyles.name}>cassie spain</h6>
          <div className={headerStyles.links}>
            <Link className={headerStyles.link} to="/">
              about
            </Link>
            <Link className={headerStyles.link} to="/work/">
              work
            </Link>
            <Link className={headerStyles.link} to="/contact/">
              contact
            </Link>
          </div>
        </div>
        <div className={headerStyles.logos}>
          <Link className={headerStyles.logo} to="/about/">
            <img src={gitHub} className={headerStyles.resize} />
          </Link>
          <Link className={headerStyles.logo} to="/work/">
            <img src={li} className={headerStyles.resize} />
          </Link>
        </div>
      </div>
      <hr className={headerStyles.line}></hr>
    </h6>
    {children}
  </div>
)
