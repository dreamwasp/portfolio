import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.css"
import footerStyles from "../styles/footer.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: 0 }}>
    <div className={headerStyles.header}>
      <div className={headerStyles.textContainer}>
        <Link className={headerStyles.name} to="/">
          cassie spain
        </Link>
        <div className={headerStyles.links}>
          <ListLink to="/about/">about</ListLink>
          <ListLink to="/work/">work</ListLink>
          <ListLink to="/contact/">contact</ListLink>
        </div>
      </div>
    </div>
    {children}
  </div>
)
