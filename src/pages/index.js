import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import genText from "../styles/genText.module.css"

import me from "../../static/unnamed.jpg"

export default () => (
  <Layout>
    <div className={genText.rightContainer}>
      <div className={genText.aboutText}>
        <p>
          hi there - i'm cass, a non-binary software engineer in ridgewood
          queens. i attended the grace hopper program @ fullstack academy in
          2020 + have had my head in my laptop ever since. when not coding,
          catch me reading experimental fiction, playing animal crossing, or
          checking out weird art of all kinds.<br></br>
          <br></br>experienced in javascript, node.js, react, react native,
          redux, firestore, + postgres but learning more all the time.
          <br></br>
          <br></br>
          <a href="mailto:cea.spain@gmail.com" className={genText.link}>
            drop me a line
          </a>
          !
        </p>
      </div>

      <div>
        <img className={genText.me} src={me} />
      </div>
    </div>
  </Layout>
)
