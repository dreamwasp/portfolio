import React from "react"

import Layout from "../components/layout"
import genText from "../styles/genText.module.css"

export default () => (
  <Layout>
    <div className={genText.rightContainer}>
      <p>connect w/ me on //icon//</p>
      <p>check out my projects on //github//</p>
      <p>shoot me an email //email</p>
    </div>
  </Layout>
)
