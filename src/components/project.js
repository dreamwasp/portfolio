import React, { useState } from "react"
import Typist from "react-typist"

import Img from "gatsby-image"

import genText from "../styles/genText.module.css"

export default props => {
  const [isShown, setIsShown] = useState(false)
  const [innerText, setInnerText] = useState("")
  const hoverEffect = inner => {
    setIsShown(true)
    setInnerText(inner)
  }
  return (
    <div className={genText.sectionContainer}>
      <div className={genText.section}>
        <div className={genText.sectionTextContainer}>
          <h3 className={genText.sectionHeader}>{props.project.title}</h3>
          <div className={genText.sectionText}>
            <p>{props.project.description}</p>
            <p>{props.project.tech}</p>
            <div className={genText.logos}>
              {props.project.links.map(logo => (
                <div className={genText.logo}>
                  <a href={logo.link} className={genText.logo} target="_blank">
                    <img
                      src={logo.icon}
                      onMouseEnter={() => hoverEffect(logo.desc)}
                      onMouseLeave={() => setIsShown(false)}
                      className={genText.resize}
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
