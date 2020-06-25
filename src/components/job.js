import React from "react"
import { useSelector } from "react-redux"
import { themeObject } from "../utils/themes"

export default props => {
  let genText = themeObject.general
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  genText = currentTheme.theme.general

  return (
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
}
