import React from "react"
import { Helmet } from "react-helmet"
import Typist from "react-typist"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import genText from "../styles/genText.module.css"

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

  return (
    <Layout>
      <Helmet>
        <title>cassie spain | about</title>
      </Helmet>
      <div className={genText.rightContainer}>
        <div className={genText.aboutText}>
          <Typist className={genText.introText}>
            hi there! i'm <span className={genText.greenText}>cass</span> — a
            non-binary
            <span className={genText.greenText}> software engineer</span> in
            ridgewood, queens.
          </Typist>
          <br></br>
          <p>
            i attended the grace hopper program @ fullstack academy in 2020 +
            have had my head in my laptop ever since. when not coding, catch me
            reading experimental fiction, playing animal crossing, or checking
            out weird art of all kinds.<br></br>
            <br></br>experienced in javascript, node.js, postgres, firestore,
            sequelize, axios, express, react, react native, + redux but learning
            more all the time.
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
