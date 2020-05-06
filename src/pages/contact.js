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
        <div className={genText.logos}>
          {contacts.map(contact => (
            <div className={genText.logo}>
              <a href={contact.link} className={genText.logo} target="_blank">
                <img
                  src={contact.icon}
                  onMouseEnter={() => hoverEffect(contact.desc)}
                  onMouseLeave={() => setIsShown(false)}
                  className={genText.resize}
                />
              </a>
            </div>
          ))}
        </div>
        {isShown && <Typist className={genText.workHeader}>{innerText}</Typist>}
      </div>
    </Layout>
  )
}
