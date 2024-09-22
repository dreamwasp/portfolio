import React from "react"
import { Helmet } from "react-helmet"
import Typist from "react-typist"
import { useSelector } from "react-redux"
import { themeObject } from "../utils/themes"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  let genText = themeObject.general
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  genText = currentTheme.theme.general

  return (
    <Layout>
      <Helmet>
        <title>cassie spain | about</title>
        <meta name="description" content="cassie spain | software engineer" />
      </Helmet>
      <div className={genText.rightContainer}>
        <div className={genText.aboutText}>
          <div className={genText.introText}>
            <Typist>
              hi there! i'm <span className={genText.greenText}>cass</span> — a
              <span className={genText.greenText}> software engineer</span> in
              ridgewood, queens.
            </Typist>
          </div>
          <br></br>
          <p className={genText.paragraphs}>
            i've spent the last four years working on design systems and frontend infrastructure. when not coding, catch me
            reading experimental fiction, playing magic the gathering, or checking out weird art of all kinds.
            <br></br>
            <br></br>
            <a href="mailto:cea.spain@gmail.com" className={genText.link}>
              drop me a line
            </a>
            !
          </p>
        </div>

        <div className={genText.meFrame}>
          <Img
            className={genText.me}
            fluid={data.file.childImageSharp.fluid}
            alt="a photo of the author in front of two neon tapestries"
          />
        </div>
      </div>
    </Layout>
  )
}
