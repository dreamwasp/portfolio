import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { themeObject } from "../utils/themes"

import Layout from "../components/layout"

export default () => {
  let genText = themeObject.general
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  genText = currentTheme.theme.general
  return (
    <Layout>
      <Helmet>
        <title>cassie spain | contact</title>
        <meta name="description" content="cassie spain | software engineer" />
      </Helmet>
      <div className={genText.rightContainer}>
        <div className={genText.contactsContainer}>
          <div className={genText.contactFrame}>
            <p className={genText.contact}>
              <span className={genText.greyText}> • • • </span> shoot me
              an&nbsp;
              <a
                href="mailto:cea.spain@gmail.com"
                className={genText.contactLink}
              >
                email
              </a>
              ,
            </p>
            <p className={genText.contact}>
              <span className={genText.greyText}> • • • • • • </span> connect
              with me on&nbsp;
              <a
                href="https://www.linkedin.com/in/ceaspain/"
                target="_blank"
                rel="noopener noreferrer"
                className={genText.contactLink}
              >
                linked in
              </a>
              ,
            </p>
            <p className={genText.contact}>
              <span className={genText.greyText}> • • • • • • • • • </span>&
              check me out on&nbsp;
              <a
                href="https://github.com/dreamwasp"
                target="_blank"
                rel="noopener noreferrer"
                className={genText.contactLink}
              >
                github
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
