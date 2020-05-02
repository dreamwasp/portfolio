import React from "react"

import Layout from "../components/layout"
import Project from "../components/project"
import Job from "../components/job"

import projects from "../utils/projects"
import jobs from "../utils/jobs"

import genText from "../styles/genText.module.css"

export default () => (
  <Layout>
    <div className={genText.rightContainer}>
      <div className={genText.sectionsContainer}>
        <div className={genText.sectionContainer}>
          <div className={genText.workHeader}>
            <h2 className={genText.workHeaderText}>projects</h2>
          </div>

          {projects.map(project => (
            <Project project={project} />
          ))}
          <div className={genText.sectionContainer}>
            <div className={genText.workHeader}>
              <h2 className={genText.workHeaderText}>
                professional experience
              </h2>
            </div>
            {jobs.map(job => (
              <Job job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
