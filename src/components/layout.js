import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.css"
import footerStyles from "../styles/footer.module.css"
import gitHub from "../../static/GitHub-Mark-Light-32px.png"
import li from "../../static/li.png"

export default ({ children }) => (
  <div style={{ margin: 0 }}>
    <h6 className={headerStyles.header}>
      <div className={headerStyles.textContainer}>
        <div className={headerStyles.nameLinks}>
          <Link className={headerStyles.name} to="/">
            cassie spain
          </Link>
          <div className={headerStyles.links}>
            <Link to="/about/">about</Link>
            <Link to="/work/">work</Link>
            <Link to="/contact/">contact</Link>
          </div>
        </div>
        <div>
          <div className={headerStyles.logos}>
            <Link to="/about/">
              <img src={gitHub} className={headerStyles.resize} />
            </Link>
            <Link to="/work/">
              <img src={li} className={headerStyles.resize} />
            </Link>
          </div>
        </div>
      </div>
    </h6>
    {children}
  </div>
)
