import React from "react"
import { Link } from "gatsby"
import footerStyles from "../styles/footer.module.css"
import gitHub from "../../static/github.svg"
import li from "../../static/li.svg"

const activeStyle = { color: "#6193bc", borderBottom: "2px solid #6193bc" }

export default () => (
  <div className={footerStyles.footer}>
    <hr className={footerStyles.line}></hr>
    <div className={footerStyles.textContainer}>© 2020, cassie spain</div>
  </div>
)
