import React from "react"

import Layout from "../components/layout"
import genText from "../styles/genText.module.css"

export default () => (
  <Layout>
    <div className={genText.container}>
      <div className={genText.sectionsContainer}>
        <div className={genText.sectionContainer}>
          <div className={genText.workHeader}>
            <h2 className={genText.workHeaderText}>projects</h2>
          </div>
          <div className={genText.section}>
            <div className={genText.sectionTextsContainer}>
              <h3 className={genText.sectionHeader}>Where's Doggo?</h3>

              <div className={genText.sectionText}>
                <p>description</p>
                <p>tech stack</p>
              </div>
            </div>
            <div className={genText.sectionPhotoContainer}>
              <div>photo</div>
              <div>links</div>
            </div>
          </div>
        </div>
        <div className={genText.sectionContainer}>
          <div className={genText.workHeader}>
            <h2 className={genText.workHeaderText}>professional experience</h2>
          </div>
          <div className={genText.sectionText}>
            <p>heloooooooo</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
