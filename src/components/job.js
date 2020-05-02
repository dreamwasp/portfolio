import React from "react"

import genText from "../styles/genText.module.css"

export default props => (
  <div>
    <div className={genText.jobTitleContainer}>
      <h3 className={genText.sectionHeader}>{props.job.title}</h3>
      <div className={genText.companyTimeContainer}>
        <h4 className={genText.companyTime}>{props.job.company}</h4>
        <h4 className={genText.companyTime}>{props.job.time}</h4>
      </div>
    </div>

    <div className={genText.section}>
      <div className={genText.sectionTextsContainer}>
        <div className={genText.sectionText}>
          <p className={genText.jobDescription}>{props.job.desc}</p>
        </div>
      </div>
    </div>
  </div>
)
