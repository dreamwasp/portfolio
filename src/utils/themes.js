import footerStyles from "../styles/footer.module.css"
import lightFooterStyles from "../styles/lightFooter.module.css"
import headerStyles from "../styles/header.module.css"
import lightHeaderStyles from "../styles/lightHeader.module.css"
import genText from "../styles/genText.module.css"
import layoutStyles from "../styles/layout.module.css"
import switchStyle from "../styles/switch.css"

export const themeObject = {
  header: headerStyles,
  footer: footerStyles,
  general: genText,
  layout: layoutStyles,
  switch: switchStyle,
}

export const lightThemeObject = {
  header: lightHeaderStyles,
  footer: lightFooterStyles,
  general: genText,
  layout: layoutStyles,
  switch: switchStyle,
}
