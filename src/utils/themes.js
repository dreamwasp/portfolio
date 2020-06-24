import footerStyles from "../styles/footer.module.css"
import headerStyles from "../styles/header.module.css"
import lightHeaderStyles from "../styles/lightHeader.module.css"
import genText from "../styles/genText.module.css"
import layoutStyles from "../styles/layout.module.css"
import switchStyle from "../styles/switch.css"

let themeObject = {
  header: headerStyles,
  footer: footerStyles,
  general: genText,
  layout: layoutStyles,
  switch: switchStyle,
}

export const themeChanger = boolean => {
  if (boolean) {
    themeObject = {
      header: headerStyles,
      footer: footerStyles,
      general: genText,
      layout: layoutStyles,
      switch: switchStyle,
    }
  } else {
    themeObject = {
      header: lightHeaderStyles,
      footer: footerStyles,
      general: genText,
      layout: layoutStyles,
      switch: switchStyle,
    }
  }
  console.log("this is running")
}

export default themeObject
