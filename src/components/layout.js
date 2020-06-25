import React from "react"
import { useSelector } from "react-redux"
import { themeObject } from "../utils/themes"

import Header from "../components/header"
import Footer from "../components/footer"

import layoutStyles from "../styles/layout.module.css"

export default ({ children }) => {
  let layoutStyles = themeObject.layout
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  layoutStyles = currentTheme.theme.layout
  return (
    <div className={layoutStyles.site}>
      <Header />
      <div className={layoutStyles.siteContent}>{children}</div>
      <Footer />
    </div>
  )
}
