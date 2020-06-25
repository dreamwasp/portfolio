import React, { useState } from "react"
import Typist from "react-typist"
import { useSelector } from "react-redux"
import { themeObject } from "../utils/themes"

import Img from "gatsby-image"

export default props => {
  const [isShown, setIsShown] = useState(false)
  const [innerText, setInnerText] = useState("")
  const hoverEffect = inner => {
    setIsShown(true)
    setInnerText(inner)
  }

  let genText = themeObject.general
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  genText = currentTheme.theme.general

  return (
    <div className={genText.sectionContainer}>
      <div className={genText.section}>
        <div className={genText.sectionTextContainer}>
          <h3 className={genText.sectionHeader}>{props.project.title}</h3>
          <div className={genText.sectionText}>
            <p className={genText.paragraphs}>{props.project.description}</p>
            <p className={genText.paragraphs}>{props.project.tech}</p>
            <div className={genText.logos}>
              {props.project.links.map(logo => (
                <div className={genText.logo}>
                  <a
                    href={logo.link}
                    className={genText.logo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={logo.icon}
                      onMouseEnter={() => hoverEffect(logo.desc)}
                      onMouseLeave={() => setIsShown(false)}
                      className={genText.resize}
                      alt={logo.desc}
                    />
                  </a>
                </div>
              ))}
            </div>
            <div className={genText.hoverTextContainer}>
              {isShown && (
                <Typist className={genText.hoverText}>{innerText}</Typist>
              )}
            </div>
          </div>
        </div>

        <div className={genText.photoContainer}>
          <Img
            className={genText.photoFrame}
            fluid={props.image.node.childImageSharp.fluid}
            alt={props.project.alt}
          />
        </div>
      </div>
    </div>
  )
}
