import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import layoutStyles from "../styles/layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.site}>
    <Header />
    <div className={layoutStyles.siteContent}>{children}</div>
    <Footer />
  </div>
)
