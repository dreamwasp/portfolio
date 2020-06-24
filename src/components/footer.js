import React from "react"
import { useSelector } from "react-redux"
import { themeObject } from "../utils/themes"

export default () => {
  let footerStyles = themeObject.footer
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  footerStyles = currentTheme.theme.footer

  return (
    <div className={footerStyles.footer}>
      <hr className={footerStyles.line}></hr>
      <div className={footerStyles.footerTextContainer}>
        © 2020, cassie spain
      </div>
    </div>
  )
}
