import React from "react"
import Typist from "react-typist"

import Layout from "../components/layout"
import genText from "../styles/genText.module.css"
import me from "../../static/unnamed.jpg"

export default () => (
  <Layout>
    <div className={genText.rightContainer}>
      <div className={genText.aboutText}>
        <Typist className={genText.introText}>
          hi there! i'm <span className={genText.greenText}>cass</span>, a
          non-binary
          <span className={genText.greenText}> software engineer</span> in
          ridgewood queens.
        </Typist>
        <br></br>
        <p>
          i attended the grace hopper program @ fullstack academy in 2020 + have
          had my head in my laptop ever since. when not coding, catch me reading
          experimental fiction, playing animal crossing, or checking out weird
          art of all kinds.<br></br>
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
