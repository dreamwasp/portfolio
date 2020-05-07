import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Typist from "react-typist"

import Layout from "../components/layout"

import contacts from "../utils/contacts"

import genText from "../styles/genText.module.css"

export default () => {
  const [isShown, setIsShown] = useState(false)
  const [innerText, setInnerText] = useState("")
  const hoverEffect = inner => {
    setIsShown(true)
    setInnerText(inner)
  }

  return (
    <Layout>
      <Helmet>
        <title>cassie spain | contact</title>
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
                href="mailto:cea.spain@gmail.com"
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
                href="mailto:cea.spain@gmail.com"
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
